import { Component } from '@angular/core';
import {ClientService} from "../service/ClientService";
import {Router} from "@angular/router";
import {GainService} from "../service/GainService";
import Swal from "sweetalert2";
import {Gain} from "../models/Gain";

@Component({
  selector: 'app-admin-gain',
  templateUrl: './admin-gain.component.html',
  styleUrls: ['./admin-gain.component.css']
})
export class AdminGainComponent {

  public listGain: Gain[] = [];

  constructor(private clientService: ClientService,
              private route: Router,
              private gainService: GainService
  ) {

  }


  ngOnInit() {
    this.gainService.getAllGain().subscribe(resp=>{
      this.listGain = resp;
    },error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Indentificattion Incorrect'
      }).then(() => this.route.navigate(['Login']));

    })
  }


}
