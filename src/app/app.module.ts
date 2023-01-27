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

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login',component: LoginComponent},
  { path: 'Client/ticket',component: ClientTicketComponent},
  { path: 'Client/gain',component: ClientGainComponent},
  { path: 'Employe/client',component: EmployeClientComponent},
  { path: 'Admin/employes',component: AdminEmployesComponent},
  { path: 'Admin/clients',component: AdminClientsComponent},
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
    RouterModule.forRoot(appRoutes,{
      anchorScrolling: 'enabled'
    })

  ],
  exports: [RouterModule],
  providers: [ ClientService, EmployeService, UserService, VerifyGuardService,
  { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
