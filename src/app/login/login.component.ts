import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/UserService";
import {ApiService} from "../service/ApiService";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

export class UserLogin {
  email: String="";
  password: String="";
}

export class UserToken {
  token: String="";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends  ApiService implements OnInit{
  userLogin: UserLogin=new UserLogin();

  constructor(private route: Router, protected override httpClient : HttpClient, private userService: UserService) {
    super(httpClient);
  }
  ngOnInit() {
  }

  sendForm(f: NgForm){
    this.userService.loginUser(this.userLogin).subscribe(resp => {
      console.log("***************** 1"+resp.token)
    },error => {
      console.log("***************** 2"+error)
    })
  }

}
