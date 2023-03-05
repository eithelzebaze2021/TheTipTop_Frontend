import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ApiService} from "./ApiService";
import {Employe} from "../models/Employe";

@Injectable()
export class EmployeService extends ApiService{

  public employeConnect : Employe = new Employe();

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

  getAllEmploye(){
    return this.httpClient.get<Employe[]>(this.host+"employe/getAllEmploye",this.httpOptions)
  }

  getEmployeByIdUser(idUser: number){
    return this.httpClient.get<Employe>(this.host+"employe/getEmployeByIdUser/"+idUser, this.httpOptions)
  }

  saveEmploye(E:Employe){
    return this.httpClient.post(this.host+"employe/saveEmploye",E, this.httpOptions)
  }

  deleteEmploye(idEmploye: number){
    return this.httpClient.delete(this.host+"employe/deleteEmployeById/"+idEmploye, this.httpOptions)

  }

  getEmployeConnectByUserServicesByToken() {
    return this.httpClient.get<Employe>(this.host+"employe/getEmployeConnect",this.httpOptions)
  }

}
