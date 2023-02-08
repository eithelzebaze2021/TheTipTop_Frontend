import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeService} from "../service/EmployeService";
import {AdminService} from "../service/AdminService";
import {ClientService} from "../service/ClientService";
import {Magasin} from "../models/Magasin";

@Component({
  selector: 'app-employe-client',
  templateUrl: './employe-client.component.html',
  styleUrls: ['./employe-client.component.css']
})
export class EmployeClientComponent implements OnInit{

  public lidtTicketMagasin: Magasin[] = [];
  constructor(
    private route : Router,
    private employeService : EmployeService,
    private adminService : AdminService,
    private clientService : ClientService
  ) {
  }

  ngOnInit() {
  }

}
