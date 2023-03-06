import { Component } from '@angular/core';
import {UserService} from "../service/UserService";
import {FormControl, NgForm, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-update-user',
  templateUrl: './form-update-user.component.html',
  styleUrls: ['./form-update-user.component.css']
})
export class FormUpdateUserComponent {

  password:string="";

  email = new FormControl('',  [Validators.required,Validators.email]);
  civilite: string="Mme.";

  constructor(private route: Router, public userService: UserService) {
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
      this.userService.userConnect.nom = this.civilite+" "+this.userService.userConnect.nom;

      this.userService.updateUser(this.userService.userConnect).subscribe(resp => {
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
