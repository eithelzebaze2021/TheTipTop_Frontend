import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  implements OnInit{

  constructor(private cookie:CookieService) {
  }
  cookiebox:boolean=true;

  ngOnInit():void {
    this.Check();
  }

  Check(){
    const checking = this.cookie.check('data');
    if (checking){
      this.cookiebox = false;
    }
    else {
      this.cookiebox = true;
    }

  }
  Allow(){
    this.cookie.set('data','TheTipTop',{expires:1})
    this.cookiebox = false;
  }

  Decline(){
    this.cookiebox = false;

  }




}
