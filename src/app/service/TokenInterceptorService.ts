import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./UserService";
import jwtDecode from "jwt-decode";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private userServices :UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token ='';
    if(localStorage.getItem("token") ===  null){
      token =''
    }
    else{
      let tokenInfo = this.getDecodedAccessToken(<string>localStorage.getItem("token"));
      let expireDate = tokenInfo.exp;
      let tdy = new Date();

      if(expireDate < (tdy.getTime() / 1000)){

        localStorage.clear();

      }
      else{

        token = <string>localStorage.getItem("token");
      }
    }

    let tokenReq = req.clone({

      setHeaders:{
        Authorization: "Bearer "+token
      }
    })

    return next.handle(tokenReq);
  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwtDecode(token);
    }
    catch(Error){
      return null;
    }
  }

}
