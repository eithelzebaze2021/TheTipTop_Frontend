import {Injectable} from "@angular/core";
import {ApiService} from "./ApiService";
import {HttpClient} from "@angular/common/http";
import {Magasin} from "../models/Magasin";
import {Ticket} from "../models/Ticket";

@Injectable()
export class AdminService extends ApiService{

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

  getAllMagasin(){
    return this.httpClient.get<Magasin[]>(this.host+"magasin/getAllMagasin", this.httpOptions)
  }

  getMagasinById(idMagasin: number){
    return this.httpClient.get(this.host+"magasin/getMagasinById/"+idMagasin, this.httpOptions)
  }

  saveMagasin(M: Magasin){
    return this.httpClient.post(this.host+"magasin/saveMagasin",M, this.httpOptions)
  }

  deleteMagasin(idMagasin: number){
    return this.httpClient.delete(this.host+"magasin/deleteMagasin/"+idMagasin, this.httpOptions)
  }

  deleteTicket(idTicket: number){
    return this.httpClient.delete(this.host+"ticket/deleteTicket/"+idTicket, this.httpOptions)
  }

  deleteClient(idClient:number){
    return this.httpClient.delete(this.host+"client/deleteClient/"+idClient,this.httpOptions)
  }

  getAllTicketGain(first: number,last: number){
    return this.httpClient.get<Ticket[]>(this.host+"ticket/getAllTicketGain/"+first+"/"+last, this.httpOptions)
  }

}
