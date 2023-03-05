import { Component } from '@angular/core';
import {EmployeService} from "../service/EmployeService";

@Component({
  selector: 'app-employe-compte',
  templateUrl: './employe-compte.component.html',
  styleUrls: ['./employe-compte.component.css']
})
export class EmployeCompteComponent {

  constructor( public employeService: EmployeService) {
  }

  ngOnInit() {

  }


}
