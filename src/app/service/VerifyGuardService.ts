import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "./ApiService";
import {ClientService} from "./ClientService";
import {EmployeService} from "./EmployeService";
import {UserService} from "./UserService";
const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Cross-origin': 'cross-site'

  })
};

@Injectable()
export class VerifyGuardService  extends ApiService implements CanActivate
{

  constructor(private route: Router, protected override httpClient: HttpClient,
              private employeService: EmployeService, private clientService: ClientService,
              private userService: UserService){
    super(httpClient)
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(localStorage.getItem("token")){

      if(localStorage.getItem("who")=="CLIENT"){

        this.clientService.getClientConnectByUserServicesByToken().subscribe(resp => {
          this.clientService.clientConnect = resp;
          this.userService.userConnect = resp.user_client;
        })

      }else if(localStorage.getItem("who")=="EMPLOYE"){

        this.employeService.getEmployeConnectByUserServicesByToken().subscribe(resp => {
          this.employeService.employeConnect = resp;
          this.userService.userConnect = resp.user_employe;
        })

      }

      return true;

    }else{
      this.route.navigate(['**']);
      return false;
    }

  }

}
