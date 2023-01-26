import {Component, OnInit} from '@angular/core';
import {ClientService} from "../service/ClientService";
import {GainService} from "../service/GainService";
import {UserService} from "../service/UserService";
import {EmployeService} from "../service/EmployeService";
import {AdminService} from "../service/AdminService";

@Component({
  selector: 'app-admin-employes',
  templateUrl: './admin-employes.component.html',
  styleUrls: ['./admin-employes.component.css']
})
export class AdminEmployesComponent implements OnInit{

  constructor( private clientService: ClientService,
               private gainService: GainService,
               private userService: UserService,
               private employeService: EmployeService,
               private adminService: AdminService) {
  }

  ngOnInit() {
  }

}
