import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../service/UserService";
import {FormControl, NgForm, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {Utilisateur} from "../models/Utilisateur";

@Component({
  selector: 'app-form-update-user',
  templateUrl: './form-update-user.component.html',
  styleUrls: ['./form-update-user.component.css']
})
export class FormUpdateUserComponent implements OnInit{

  password:string="";

  email = new FormControl('',  [Validators.required,Validators.email]);
  civilite: string="Mme.";
  @Input() adresse: string ="";
  @Input() code_postal: string ="";
  @Input() mail: string ="";
  @Input() nom: string ="";
  @Input() prenom: string ="";
  @Input() ville: string="";
  @Input() idUser: number=0;

  userUpdate:Utilisateur = new Utilisateur()

  constructor(private route: Router, public userService: UserService) {

  }

  ngOnInit(): void {
  }

sendInfoUpdate(f: NgForm) {

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

      this.userUpdate.adresse = this.adresse;
      this.userUpdate.code_postal= this.code_postal;
      this.userUpdate.mail= this.mail;
      this.userUpdate.nom= this.nom;
      this.userUpdate.prenom= this.prenom;
      this.userUpdate.ville= this.ville;
      this.userUpdate.idUser= this.idUser;

      this.userService.updateUser(this.userUpdate).subscribe(resp => {

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
