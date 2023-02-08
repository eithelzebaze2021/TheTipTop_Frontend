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

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login',component: LoginComponent},
  { path: 'Client_ticket',component: ClientTicketComponent},
  { path: 'Client_gain',component: ClientGainComponent},
  {path:'client_compte',component:ClientCompteComponent},
  { path: 'Employe_client',component: EmployeClientComponent},
  {path:'employe_ticket',component:EmployeTicketComponent},
  {path:'employe_compte',component:EmployeCompteComponent},
  { path: 'Admin_employes',component: AdminEmployesComponent},
  {path:'admin_gain',component:AdminGainComponent},
  {path:'admin_magasin',component:AdminMagasinComponent},
  {path:'admin_tirage',component:AdminTirageComponent},
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
    PageNotFoundComponent,
    NavbarClientComponent,
    NavbarAdminComponent,
    NavbarEmployeComponent,
    EmployeTicketComponent,
    AdminGainComponent,
    AdminTirageComponent,
    AdminMagasinComponent,
    EmployeCompteComponent,
    ClientCompteComponent
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
