import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {AdminService} from "../service/AdminService";
import {EmployeService} from "../service/EmployeService";
import {ClientService} from "../service/ClientService";
import Swal from "sweetalert2";
import {Ticket} from "../models/Ticket";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-admin-ticket',
  templateUrl: './admin-ticket.component.html',
  styleUrls: ['./admin-ticket.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminTicketComponent {

  displayedColumns: string[] = ['idTicket', 'numero', 'montant'];
  dataSource: MatTableDataSource<Ticket> = new MatTableDataSource<Ticket>();
  @ViewChild(MatPaginator) paginator: MatPaginator | null=new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort | null=new MatSort();

  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: Ticket | null | undefined;

  constructor(
    private route: Router,
    private routeParam: ActivatedRoute,
    private adminService: AdminService,
    private employeService: EmployeService,
    private clientService: ClientService) {
  }
  ngOnInit() {

    this.adminService.getAllTicketGain(0,30).subscribe(resp=>{
      this.dataSource=new MatTableDataSource<Ticket>(resp);
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
