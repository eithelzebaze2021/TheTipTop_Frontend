import {Injectable} from "@angular/core";
import {ApiService} from "./ApiService";
import {HttpClient} from "@angular/common/http";
import {Magasin} from "../models/Magasin";

@Injectable()
export class AdminService extends ApiService{

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

  getAllMagasin(){
    return this.httpClient.get(this.host+"user/getAllMagasin", this.httpOptions)
  }

  getMagasinById(idMagasin: number){
    return this.httpClient.get(this.host+"user/getMagasinById"+idMagasin, this.httpOptions)
  }

  saveMagasin(M: Magasin){
    return this.httpClient.post(this.host+"user/saveMagasin",M, this.httpOptions)
  }

}
