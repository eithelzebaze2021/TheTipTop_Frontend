import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from "../service/ClientService";
import {Router} from "@angular/router";
import {GainService} from "../service/GainService";
import {UserService} from "../service/UserService";
import {EmployeService} from "../service/EmployeService";
import {AdminService} from "../service/AdminService";
import Swal from "sweetalert2";
import {Magasin} from "../models/Magasin";
import {MatTableDataSource} from "@angular/material/table";
import {Client} from "../models/Client";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-admin-magasin',
  templateUrl: './admin-magasin.component.html',
  styleUrls: ['./admin-magasin.component.css']
})
export class AdminMagasinComponent implements OnInit{


  displayedColumns: string[] = ['id', 'nom', 'ville', 'Action'];
  dataSource: MatTableDataSource<Magasin> = new MatTableDataSource<Magasin>();
  @ViewChild(MatPaginator) paginator: MatPaginator | null=new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort | null=new MatSort();

  constructor( private clientService: ClientService,
               private route: Router,
               private gainService: GainService,
               private userService: UserService,
               private employeService: EmployeService,
               private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getAllMagasin().subscribe(resp=>{
      this.dataSource=new MatTableDataSource<Magasin>(resp);
      this.dataSource.paginator = this.paginator;
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Indentificattion Incorrect'
      }).then(() => this.route.navigate(['Login']));

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
