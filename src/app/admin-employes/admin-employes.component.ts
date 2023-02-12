import {Component, OnInit} from '@angular/core';
import {ClientService} from "../service/ClientService";
import {GainService} from "../service/GainService";
import {UserService} from "../service/UserService";
import {EmployeService} from "../service/EmployeService";
import {AdminService} from "../service/AdminService";
import {Employe} from "../models/Employe";
import {Router} from "@angular/router";
import {Client} from "../models/Client";
import Swal from "sweetalert2";

@Component({
  selector: 'app-admin-employes',
  templateUrl: './admin-employes.component.html',
  styleUrls: ['./admin-employes.component.css']
})
export class AdminEmployesComponent implements OnInit{
  public listEmploye: Employe[] = [];

  constructor( private clientService: ClientService,
               private route: Router,
               private gainService: GainService,
               private userService: UserService,
               private employeService: EmployeService,
               private adminService: AdminService) {
  }

  ngOnInit() {
    this.employeService.getAllEmploye().subscribe(resp=>{
     this.listEmploye = resp;
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Indentificattion Incorrect'
      }).then(() => this.route.navigate(['Login']));

    })
  }

}
