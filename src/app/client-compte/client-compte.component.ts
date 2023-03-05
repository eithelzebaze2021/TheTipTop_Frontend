import {Component, OnInit} from '@angular/core';
import {ClientService} from "../service/ClientService";

@Component({
  selector: 'app-client-compte',
  templateUrl: './client-compte.component.html',
  styleUrls: ['./client-compte.component.css']
})
export class ClientCompteComponent implements OnInit{

  constructor( public clientService: ClientService) {
  }

  ngOnInit() {
  }

}
