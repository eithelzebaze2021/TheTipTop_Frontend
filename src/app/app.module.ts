import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginComponent} from "./login/login.component";
import {ClientTicketComponent} from "./client-ticket/client-ticket.component";
import {VerifyGuardService} from "./service/VerifyGuardService";
import {EmployeClientComponent} from "./employe-client/employe-client.component";
import {AdminEmployesComponent} from "./admin-employes/admin-employes.component";
import {AdminGainComponent} from "./admin-gain/admin-gain.component";
import {CguComponent} from "./pages/cgu/cgu.component";
import {PolitiqueCookiesComponent} from "./pages/politique-cookies/politique-cookies.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {DonneesPersonnellesComponent} from "./pages/donnees-personnelles/donnees-personnelles.component";
import {RegisterComponent} from "./register/register.component";
import {MentionsLegalesComponent} from "./pages/mentions-legales/mentions-legales.component";
import {ClientGainComponent} from "./client-gain/client-gain.component";
import {EmployeTicketComponent} from "./employe-ticket/employe-ticket.component";
import {AdminMagasinComponent} from "./admin-magasin/admin-magasin.component";
import {AdminClientsComponent} from "./admin-clients/admin-clients.component";
import {EmployeCompteComponent} from "./employe-compte/employe-compte.component";
import {AdminStatComponent} from "./admin-stat/admin-stat.component";
import {AdminTicketComponent} from "./admin-ticket/admin-ticket.component";
import {AdminTirageComponent} from "./admin-tirage/admin-tirage.component";
import {UserService} from "./service/UserService";
import {TokenInterceptorService} from "./service/TokenInterceptorService";
import {GainService} from "./service/GainService";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {EmployeService} from "./service/EmployeService";
import {ClientService} from "./service/ClientService";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AdminService} from "./service/AdminService";
import {ClientCompteComponent} from "./client-compte/client-compte.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {FormUpdateUserComponent} from "./form-update-user/form-update-user.component";
import {NavbarClientComponent} from "./navbar-client/navbar-client.component";
import {NavbarEmployeComponent} from "./navbar-employe/navbar-employe.component";
import {NavbarAdminComponent} from "./navbar-admin/navbar-admin.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatSortModule} from "@angular/material/sort";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CommonModule} from "@angular/common";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'Login',component: LoginComponent},
  { path: 'Client/ticket',component: ClientTicketComponent, canActivate: [VerifyGuardService]},
  { path: 'Client/gain',component: ClientGainComponent, canActivate: [VerifyGuardService]},
  {path:'Client/compte',component:ClientCompteComponent, canActivate: [VerifyGuardService]},
  { path: 'Employe/client',component: EmployeClientComponent, canActivate: [VerifyGuardService]},
  {path:'Employe/ticket',component:EmployeTicketComponent, canActivate: [VerifyGuardService]},
  {path:'Employe/compte',component:EmployeCompteComponent, canActivate: [VerifyGuardService]},
  { path: 'Admin/employes',component: AdminEmployesComponent, canActivate: [VerifyGuardService]},
  {path:'Admin/gain',component:AdminGainComponent, canActivate: [VerifyGuardService]},
  {path:'Admin/magasin',component:AdminMagasinComponent, canActivate: [VerifyGuardService]},
  {path:'Admin/tirage',component:AdminTirageComponent, canActivate: [VerifyGuardService]},
  { path: 'Admin/clients',component: AdminClientsComponent, canActivate: [VerifyGuardService]},
  {path:'Admin/stat',component:AdminStatComponent, canActivate: [VerifyGuardService]},
  { path: 'Admin/ticket',component:AdminTicketComponent, canActivate: [VerifyGuardService]},
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
    AdminTicketComponent,
    FormUpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
    FormsModule,
    MatProgressBarModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatNativeDateModule,
    CdkAccordionModule,
    MatTableModule,
    MatChipsModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule
  ],
  providers: [ClientService, EmployeService, UserService, VerifyGuardService, GainService,AdminService,
    { provide: HTTP_INTERCEPTORS, useClass :TokenInterceptorService,  multi:true},
    { provide: MatPaginatorIntl, useClass: AdminClientsComponent },
    { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
