import {Component, OnInit} from '@angular/core';
import {AdminService} from "../service/AdminService";
import {EmployeService} from "../service/EmployeService";
import {ClientService} from "../service/ClientService";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/Client";

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit{
  public listClient: Client[] = [];

  constructor(
    private route: Router,
    private adminService: AdminService,
    private employeService: EmployeService,
    private clientService: ClientService) {
  }
  ngOnInit() {

    this.clientService.getAllClient().subscribe(resp=>{
      this.listClient = resp;
    })

  }

}
