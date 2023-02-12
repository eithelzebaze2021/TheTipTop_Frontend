import {Component, OnInit} from '@angular/core';
import {ClientService} from "../service/ClientService";
import {Router} from "@angular/router";
import {GainService} from "../service/GainService";
import {UserService} from "../service/UserService";
import {EmployeService} from "../service/EmployeService";
import {AdminService} from "../service/AdminService";
import Swal from "sweetalert2";
import {Magasin} from "../models/Magasin";

@Component({
  selector: 'app-admin-magasin',
  templateUrl: './admin-magasin.component.html',
  styleUrls: ['./admin-magasin.component.css']
})
export class AdminMagasinComponent implements OnInit{


  public listMagasin: Magasin[] = [];

  constructor( private clientService: ClientService,
               private route: Router,
               private gainService: GainService,
               private userService: UserService,
               private employeService: EmployeService,
               private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getAllMagasin().subscribe(resp=>{
      this.listMagasin = resp;
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Indentificattion Incorrect'
      }).then(() => this.route.navigate(['Login']));

    })
  }


}
