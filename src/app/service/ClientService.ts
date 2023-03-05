import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ApiService} from "./ApiService";
import {Client} from "../models/Client";
import {Ticket} from "../models/Ticket";

@Injectable()
export class ClientService extends ApiService{

  public clientConnect: Client = new Client();

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

  getAllClient(){
    return this.httpClient.get<Client[]>(this.host+"client/getAllClient", this.httpOptions)
  }

  getClientByIdClient(idClient: number){
    return this.httpClient.get<Client>(this.host+"client/getClientByIdClient/"+idClient, this.httpOptions)
  }

  getClientByIdUser(idUser: number){
    return this.httpClient.get<Client>(this.host+"client/getClientByIdUser/"+idUser, this.httpOptions)
  }

  saveClient(C: Client){
    return this.httpClient.post(this.host+"client/saveClient", C, this.httpOptions)

  }

  getAllTicketClient(idClient: number,first: number,last: number){
    return this.httpClient.get<Ticket[]>(this.host+"ticket/getAllTicketClient/"+idClient+"/"+first+"/"+last, this.httpOptions)
  }

  getTicketById(idTicket: number){
    return this.httpClient.get(this.host+"ticket/getTicketById/"+idTicket, this.httpOptions)
  }

  saveTicketClient(numTicket:string){
    return this.httpClient.post(this.host+"ticket/saveTicketClient/"+numTicket,this.clientConnect,this.httpOptions)
  }

  getClientConnectByUserServicesByToken() {
    return this.httpClient.get<Client>(this.host+"client/getClientConnect",this.httpOptions)
  }

}
