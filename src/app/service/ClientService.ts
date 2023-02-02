import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from "./ApiService";
import {Client} from "../models/Client";
import {Ticket} from "../models/Ticket";

@Injectable()
export class ClientService extends ApiService{

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

  getAllClient(){
    return this.httpClient.get<Client[]>(this.host+"client/getAllClient", this.httpOptions)
  }

  getClientById(idClient: number){
    return this.httpClient.get(this.host+"client/getClientById/"+idClient, this.httpOptions)
  }

  saveClient(C: Client){
    this.httpClient.post(this.host+"client/saveClient", C, this.httpOptions)

  }
  deleteClient(idClient:number){
    return this.httpClient.delete(this.host+"client/deleteClient/"+idClient,this.httpOptions)
  }

  getAllTicket(){
    return this.httpClient.get(this.host+"ticket/getAllTicket", this.httpOptions)
  }

  getTicketById(idTicket: number){
    return this.httpClient.get(this.host+"ticket/getTicketById/"+idTicket, this.httpOptions)
  }

  saveTicket(T:Ticket){
    return this.httpClient.post(this.host+"ticket/saveTicket",T,this.httpOptions)
  }

  deleteTicket(idTicket: number){
    return this.httpClient.delete(this.host+"ticket/deleteTicket/"+idTicket, this.httpOptions)
  }





}
