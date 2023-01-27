import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ApiService{

  constructor(protected httpClient: HttpClient) {}

  protected host = 'http://localhost:8090/api-tip-top-G1/';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Cross-origin': 'cross-site'
    })
  };

}
