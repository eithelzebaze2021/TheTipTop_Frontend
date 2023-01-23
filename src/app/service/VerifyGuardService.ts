import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "./ApiService";
const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Cross-origin': 'cross-site'

  })
};

@Injectable()
export class VerifyGuardService  extends ApiService implements CanActivate
{

  constructor(private route: Router, protected override httpClient: HttpClient){
    super(httpClient)
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.getUserConnectByUserServicesByToken();

    if(localStorage.getItem("token")){
      return true;
    }else{
      this.route.navigate(['Acceuil']);
      return false;
    }

  }

  private getUserConnectByUserServicesByToken() {

  }
}
