import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit{
  constructor(public route: Router) {

  }

  ngOnInit(): void {

  }

  Deconnect() {
    localStorage.clear();
  }

}
