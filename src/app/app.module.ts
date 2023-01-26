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
    CguComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  
  ],
  exports: [RouterModule],
  providers: [ ClientService, EmployeService, UserService, VerifyGuardService,
  { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
