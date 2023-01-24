import {Injectable} from "@angular/core";
import {ApiService} from "./ApiService";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService extends ApiService{

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

  getAllUser(){
    return this.httpClient.get(this.host+"api-tip-top-G1/user/getAllUser",this.httpOptions)
  }

}
