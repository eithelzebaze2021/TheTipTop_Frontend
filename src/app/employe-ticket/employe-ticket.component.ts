import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatTableDataSource} from "@angular/material/table";
import {Ticket} from "../models/Ticket";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../service/AdminService";
import {EmployeService} from "../service/EmployeService";
import {ClientService} from "../service/ClientService";
import Swal from "sweetalert2";
import {GainService} from "../service/GainService";

@Component({
  selector: 'app-employe-ticket',
  templateUrl: './employe-ticket.component.html',
  styleUrls: ['./employe-ticket.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EmployeTicketComponent {

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
    private gainService: GainService) {
  }
  ngOnInit() {

    this.adminService.getAllTicketGain().subscribe(resp=>{
      this.dataSource=new MatTableDataSource<Ticket>(resp.filter((e)=>e.magasin.idMagasin==this.employeService.employeConnect.magasin_empl.idMagasin));
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

  updateTicket(t:Ticket){

    this.gainService.updateTicketGain(t.idTicket).subscribe(resp=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Opération valide',
        showConfirmButton: false,
        timer: 1500
      })
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Non validé'
      });

    })

  }

}
