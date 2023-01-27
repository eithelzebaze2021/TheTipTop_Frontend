import {Component, OnInit} from '@angular/core';
import {AdminService} from "../service/AdminService";
import {EmployeService} from "../service/EmployeService";
import {ClientService} from "../service/ClientService";

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit{

  constructor(
    private adminService: AdminService,
    private employeService: EmployeService,
    private clientService: ClientService,) {
  }
  ngOnInit() {
  }

}
