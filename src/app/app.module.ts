import {LOCALE_ID, NgModule, isDevMode} from '@angular/core';
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
import {ClientGainComponent} from "./client-gain/client-gain.component";
import {ClientTicketComponent} from "./client-ticket/client-ticket.component";
import {AdminEmployesComponent} from "./admin-employes/admin-employes.component";
import {AdminClientsComponent} from "./admin-clients/admin-clients.component";
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { RegisterComponent } from './register/register.component';
import {CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
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
import { FormUpdateUserComponent } from './form-update-user/form-update-user.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from "@angular/material/chips";
import {MatTableModule} from "@angular/material/table";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatNativeDateModule} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {CookieService} from "ngx-cookie-service";
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

registerLocaleData(localeFr);

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'Login',component: LoginComponent},
  { path: 'Client/ticket',component: ClientTicketComponent, canActivate: [VerifyGuardService]},
  { path: 'Client/gain',component: ClientGainComponent, canActivate: [VerifyGuardService]},
  {path:'Client/compte',component:ClientCompteComponent, canActivate: [VerifyGuardService]},
  {path:'Employe/ticket',component:EmployeTicketComponent, canActivate: [VerifyGuardService]},
  {path:'Employe/compte',component:EmployeCompteComponent, canActivate: [VerifyGuardService]},
  { path: 'Admin/employes',component: AdminEmployesComponent, canActivate: [VerifyGuardService]},
  {path:'Admin/gain',component:AdminGainComponent, canActivate: [VerifyGuardService]},
  {path:'Admin/magasin',component:AdminMagasinComponent, canActivate: [VerifyGuardService]},
  {path:'Admin/tirage',component:AdminTirageComponent, canActivate: [VerifyGuardService]},
  { path: 'Admin',component: AdminClientsComponent, canActivate: [VerifyGuardService]},
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
        BrowserAnimationsModule,
        BrowserModule,
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
        MatDividerModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })

    ],
  providers: [ ClientService, EmployeService, UserService, VerifyGuardService, GainService,AdminService,CookieService,
    { provide: HTTP_INTERCEPTORS, useClass :TokenInterceptorService,  multi:true},
    { provide: MatPaginatorIntl, useClass: AdminClientsComponent },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
