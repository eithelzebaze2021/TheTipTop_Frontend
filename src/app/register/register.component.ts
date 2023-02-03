import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {Role} from "../models/Role";
import {UserService} from "../service/UserService";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public userRegister:Utilisateur=new Utilisateur();
  public tabRole:Role[]=[];
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
  }

  sendInfoRegister(f: NgForm) {

  }
}
