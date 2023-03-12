import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from "../service/ClientService";
import {GainService} from "../service/GainService";
import {UserService} from "../service/UserService";
import {EmployeService} from "../service/EmployeService";
import {AdminService} from "../service/AdminService";
import {Employe} from "../models/Employe";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {MatTableDataSource} from "@angular/material/table";
import {Client} from "../models/Client";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-admin-employes',
  templateUrl: './admin-employes.component.html',
  styleUrls: ['./admin-employes.component.css']
})
export class AdminEmployesComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'id_mag', 'Action'];
  dataSource: MatTableDataSource<Employe> = new MatTableDataSource<Employe>();
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
    this.employeService.getAllEmploye().subscribe(resp=>{
      this.dataSource=new MatTableDataSource<Employe>(resp);
      this.dataSource.paginator = this.paginator;
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Indentificattion Incorrect'
      }).then(() => this.route.navigate(['Login']));

    })
  }

}
