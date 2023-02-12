import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-employe',
  templateUrl: './navbar-employe.component.html',
  styleUrls: ['./navbar-employe.component.css']
})
export class NavbarEmployeComponent implements OnInit{
  constructor(public route: Router) {

  }

  ngOnInit(): void {

  }

  Deconnect() {
    localStorage.clear();
  }

}
