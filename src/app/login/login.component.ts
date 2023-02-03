import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/UserService";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Utilisateur} from "../models/Utilisateur";

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

  constructor(private route: Router, private userService: UserService) {
  }
  ngOnInit() {
  }

  sendInfoConnect(f: NgForm){
    this.userService.loginUser(this.userLogin).subscribe(resp =>{

      if(resp.token !== null && resp.user!==null){
        localStorage.setItem('token',resp.token);

        if(resp.user.role=="ROLE_ADMIN"){
          this.route.navigate(['Admin_clients']);
        }else if(resp.user.role=="ROLE_CLIENT"){
          this.route.navigate(['Client_gain']);
        }else{
          this.route.navigate(['Employe_client']);
        }

      }

    },error => {
      this.route.navigate(['**']);
    })
  }

}
