import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../models/Utilisateur";
import {UserService} from "../service/UserService";
import {FormControl, NgForm, Validators} from "@angular/forms";
import {ClientService} from "../service/ClientService";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public userRegister:Utilisateur=new Utilisateur();
  public tabRole:string[]=[];
  password:string="";

  email = new FormControl('',  [Validators.required,Validators.email]);
  civilite: string="Mme.";
  constructor(private route: Router, private userService:UserService, private clientService:ClientService) {
  }

  ngOnInit(): void {
    this.userService.getAllRoleForPublic().subscribe(resp => {

      for(let role of resp){
        if(role!="ROLE_ADMIN"){
          this.tabRole.push(role);
        }
      }
    })


  }

  sendInfoRegister(f: NgForm) {

    Swal.fire({
      title:'Voulez vous confimer le formulaire ?',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText:'Oui',
      cancelButtonText: 'Non',
      showCancelButton: true,
      showCloseButton: true
    }).then((value)=>{
      if(value.isConfirmed){
        this.userRegister.nom = this.civilite+" "+this.userRegister.nom;

        this.userService.saveUser(this.userRegister).subscribe(resp => {
          this.route.navigate(['login']);
        },error => {
          this.route.navigate(['**']);
        })
      }
    })

  }

  getErrorMessageMail() {
    return this.email.hasError('email') ? 'Email invalide' : '';
  }

}
