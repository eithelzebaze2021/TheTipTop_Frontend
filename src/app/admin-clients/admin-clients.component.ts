import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../service/AdminService";
import {EmployeService} from "../service/EmployeService";
import {ClientService} from "../service/ClientService";
import {Router} from "@angular/router";
import {Client} from "../models/Client";
import Swal from "sweetalert2";
import {MatSort} from "@angular/material/sort";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent extends MatPaginatorIntl implements OnInit{

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'ville', 'Action'];
  dataSource: MatTableDataSource<Client> = new MatTableDataSource<Client>();
  @ViewChild(MatPaginator) paginator: MatPaginator | null=new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort | null=new MatSort();

  override itemsPerPageLabel = "Nombre par page";
  override lastPageLabel="Dernière suivante";
  override firstPageLabel="Première page";
  override previousPageLabel="Page précédente";
  override nextPageLabel="Page suivante";

  constructor(
    private route: Router,
    private adminService: AdminService,
    private employeService: EmployeService,
    private clientService: ClientService) {
    super();
  }
  ngOnInit() {

    this.clientService.getAllClient().subscribe(resp=>{
      this.dataSource=new MatTableDataSource<Client>(resp);
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
