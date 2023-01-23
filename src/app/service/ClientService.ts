import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from "./ApiService";

@Injectable()
export class ClientService extends ApiService{

  constructor(protected override httpClient:HttpClient) {
    super(httpClient);
  }

}
