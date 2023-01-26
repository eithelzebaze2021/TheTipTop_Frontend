import {Component, OnInit} from '@angular/core';
import {GainService} from "../service/GainService";
import {UserService} from "../service/UserService";
import {ClientService} from "../service/ClientService";

@Component({
  selector: 'app-client-gain',
  templateUrl: './client-gain.component.html',
  styleUrls: ['./client-gain.component.css']
})
export class ClientGainComponent implements OnInit{

  constructor(private gainService: GainService,
              private userService: UserService,
              private clientService: ClientService) {
  }

  ngOnInit(): void {
  }


}
