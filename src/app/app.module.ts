import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {ClientService} from "./service/ClientService";
import {EmployeService} from "./service/EmployeService";
import {UserService} from "./service/UserService";
import {VerifyGuardService} from "./service/VerifyGuardService";
import {EmployeClientComponent} from "./employe-client/employe-client.component";
import {ClientGainComponent} from "./client-gain/client-gain.component";
import {ClientTicketComponent} from "./client-ticket/client-ticket.component";
import {AdminEmployesComponent} from "./admin-employes/admin-employes.component";
import {AdminClientsComponent} from "./admin-clients/admin-clients.component";
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { PolitiqueCookiesComponent } from './pages/politique-cookies/politique-cookies.component';
import { DonneesPersonnellesComponent } from './pages/donnees-personnelles/donnees-personnelles.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {GainService} from "./service/GainService";
import {AdminService} from "./service/AdminService";
import {TokenInterceptorService} from "./service/TokenInterceptorService";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login',component: LoginComponent},
  { path: 'Client_ticket',component: ClientTicketComponent},
  { path: 'Client_gain',component: ClientGainComponent},
  { path: 'Employe_client',component: EmployeClientComponent},
  { path: 'Admin_employes',component: AdminEmployesComponent},
  { path: 'Admin_clients',component: AdminClientsComponent},
  { path: 'cgu',component: CguComponent},
  { path: 'mentions-legales',component: MentionsLegalesComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'politique-cookies',component: PolitiqueCookiesComponent},
  { path: 'donnees-personnelles',component: DonneesPersonnellesComponent},
  { path: '**',component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    ClientTicketComponent,
    ClientGainComponent,
    EmployeClientComponent,
    AdminEmployesComponent,
    AdminClientsComponent,
    LoginComponent,
    MentionsLegalesComponent,
    CguComponent,
    RegisterComponent,
    PolitiqueCookiesComponent,
    DonneesPersonnellesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    }),
    FormsModule

  ],
  providers: [ ClientService, EmployeService, UserService, VerifyGuardService, GainService,AdminService,
    { provide: HTTP_INTERCEPTORS, useClass :TokenInterceptorService,  multi:true},
    { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
