import { Component } from '@angular/core';
import {AdminService} from "../service/AdminService";
import {EmployeService} from "../service/EmployeService";
import {ClientService} from "../service/ClientService";
import Swal from "sweetalert2";
import {Ticket} from "../models/Ticket";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-ticket',
  templateUrl: './admin-ticket.component.html',
  styleUrls: ['./admin-ticket.component.css']
})
export class AdminTicketComponent {

  public listTicket: Ticket[] = [];

  constructor(
    private route: Router,
    private routeParam: ActivatedRoute,
    private adminService: AdminService,
    private employeService: EmployeService,
    private clientService: ClientService) {
  }
  ngOnInit() {

    this.adminService.getAllTicketGain(0,30).subscribe(resp=>{
      this.listTicket = resp;
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Indentificattion Incorrect'
      }).then(() => this.route.navigate(['Login']));

    })

  }

}
