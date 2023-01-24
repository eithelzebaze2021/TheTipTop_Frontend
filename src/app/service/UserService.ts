import {Injectable} from "@angular/core";
import {ApiService} from "./ApiService";
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/Utilisateur";
import * as url from "url";

@Injectable()
export class UserService extends ApiService{

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

  getAllUser(){
    return this.httpClient.get(this.host+"user/getAllUser",this.httpOptions)
  }

  getUserById(idUser: number){
    return this.httpClient.get(this.host+"user/getUserById/"+idUser,this.httpOptions)
  }

  postUser(U : Utilisateur){
    return this.httpClient.post(this.host+"user/saveUser",U, this.httpOptions)
  }


}
