import {ApiService} from "./ApiService";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Gain} from "../models/Gain";
import {Ticket} from "../models/Ticket";

@Injectable()
export class GainService extends ApiService{
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getAllGain(){
    return this.httpClient.get<Gain[]>(this.host+"gain/getAllGain", this.httpOptions)
  }

  getGainById(idGain: number){
    return this.httpClient.get(this.host+"gain/getGainById/"+idGain, this.httpOptions)
  }

  saveGain(G: Gain){
    return this.httpClient.post(this.host+"gain/saveGain",G, this.httpOptions)

  }

  deleteGain(idGain: number){
    return this.httpClient.delete(this.host+"gain/deleteGainById/"+idGain, this.httpOptions)
  }

  updateTicketGain(t: Number) {
    return this.httpClient.get(this.host+"ticket/updateTicket/"+t, this.httpOptions)
  }
}
