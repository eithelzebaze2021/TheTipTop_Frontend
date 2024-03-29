import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/UserService";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Utilisateur} from "../models/Utilisateur";
import Swal from 'sweetalert2';
import {ClientService} from "../service/ClientService";
import {EmployeService} from "../service/EmployeService";

export class UserLogin {
  email: String="";
  password: String="";
}

export class UserToken {
  token: string="";
  user: Utilisateur=new Utilisateur();
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userLogin: UserLogin=new UserLogin();

  constructor(private route: Router, private userService: UserService,
              private clientService: ClientService, private employeService: EmployeService) {
  }
  ngOnInit() {
    localStorage.clear();
  }

  sendInfoConnect(f: NgForm){
    this.userService.loginUser(this.userLogin).subscribe(resp =>{

      if(resp.token !== null && resp.user!==null){
        localStorage.setItem('token',resp.token);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Indentificattion correct',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {if(resp.user.role=="ROLE_ADMIN"){
          this.route.navigate(['Admin']);
            localStorage.setItem('who',"ADMIN");
        }else if(resp.user.role=="ROLE_CLIENT"){
            this.userService.userConnect=resp.user;
            this.clientService.getClientByIdUser(resp.user.idUser).subscribe(resp => {
              this.clientService.clientConnect=resp;
              this.route.navigate(['Client/ticket']);
              localStorage.setItem('who',"CLIENT");
            })

        }else{
            this.userService.userConnect=resp.user;
            this.employeService.getEmployeByIdUser(resp.user.idUser).subscribe(resp => {
              this.employeService.employeConnect=resp;
              this.route.navigate(['Employe/ticket']);
              localStorage.setItem('who',"EMPLOYE");
            })
        }}
        );

      }

    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Indentificattion Incorrect'
      }).then(() => this.route.navigate(['Login']));

    })
  }

}
