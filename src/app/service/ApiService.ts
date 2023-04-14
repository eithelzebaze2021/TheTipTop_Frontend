import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ApiService{

  constructor(protected httpClient: HttpClient) {

  }

  protected host = 'https://tiptopapi.azurewebsites.net/api-tip-top-G1/';
  //protected host = 'http://localhost:1997/api-tip-top-G1/';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Cross-origin': 'cross-site'
    })
  };

}
