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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarClientComponent } from './navbar-client/navbar-client.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarEmployeComponent } from './navbar-employe/navbar-employe.component';
import { EmployeTicketComponent } from './employe-ticket/employe-ticket.component';
import { AdminGainComponent } from './admin-gain/admin-gain.component';
import { AdminTirageComponent } from './admin-tirage/admin-tirage.component';
import { AdminMagasinComponent } from './admin-magasin/admin-magasin.component';
import { EmployeCompteComponent } from './employe-compte/employe-compte.component';
import { ClientCompteComponent } from './client-compte/client-compte.component';
import { AdminStatComponent } from './admin-stat/admin-stat.component';
import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'Login',component: LoginComponent},
  { path: 'Client_ticket',component: ClientTicketComponent},
  { path: 'Client_gain',component: ClientGainComponent},
  {path:'Client_compte',component:ClientCompteComponent},
  { path: 'Employe_client',component: EmployeClientComponent},
  {path:'Employe_ticket',component:EmployeTicketComponent},
  {path:'Employe_compte',component:EmployeCompteComponent},
  { path: 'Admin_employes',component: AdminEmployesComponent},
  {path:'Admin_gain',component:AdminGainComponent},
  {path:'Admin_magasin',component:AdminMagasinComponent},
  {path:'Admin_tirage',component:AdminTirageComponent},
  { path: 'Admin_clients',component: AdminClientsComponent},
  {path:'Admin_stat',component:AdminStatComponent},
  { path: 'Admin_ticket',component:AdminTicketComponent},
  { path: 'CGU',component: CguComponent},
  { path: 'Mentions-legales',component: MentionsLegalesComponent},
  { path: 'Register',component: RegisterComponent},
  { path: 'Politique-cookies',component: PolitiqueCookiesComponent},
  { path: 'Donnees-personnelles',component: DonneesPersonnellesComponent},
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
    PageNotFoundComponent,
    NavbarClientComponent,
    NavbarAdminComponent,
    NavbarEmployeComponent,
    EmployeTicketComponent,
    AdminGainComponent,
    AdminTirageComponent,
    AdminMagasinComponent,
    EmployeCompteComponent,
    ClientCompteComponent,
    AdminStatComponent,
    AdminTicketComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {
            anchorScrolling: 'enabled'
        }),
        FormsModule,
        ReactiveFormsModule

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
