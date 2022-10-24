import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';  
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatPaginatorModule} from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { MeniComponent } from './meni/meni.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminRegisterComponent } from './auth/register/admin-register/admin-register.component';
import { KupacRegisterComponent } from './auth/register/kupac-register/kupac-register.component';
import { UsersComponent } from './page/users/users.component';
import { DetailsUsersComponent } from './page/users/details-users/details-users.component';
import { TableUsersComponent } from './page/users/table-users/table-users.component';
import { FormUsersComponent } from './page/users/form-users/form-users.component';
import { AboutComponent } from './page/about/about.component';
import { RakijeComponent } from './page/brandies/rakije.component';
import { TableRakijeComponent } from './page/brandies/table-rakije/table-rakije.component';
import { FormRakijeComponent } from './page/brandies/form-rakije/form-rakije.component';
import { SearchRakijeComponent } from './page/brandies/search-rakije/search-rakije.component';
import { DetailsRakijeComponent } from './page/brandies/details-rakije/details-rakije.component';
import { PorudzbineComponent } from './page/orders/porudzbine.component';
import { TablePorudzbineComponent } from './page/orders/table-porudzbine/table-porudzbine.component';
import { FormPorudzbineComponent } from './page/orders/form-porudzbine/form-porudzbine.component';
import { DetailsPorudzbineComponent } from './page/orders/details-porudzbine/details-porudzbine.component';
import { KupciComponent } from './page/customers/kupci.component';
import { TableKupciComponent } from './page/customers/table-kupci/table-kupci.component';
import { FormKupciComponent } from './page/customers/form-kupci/form-kupci.component';
import { DetailsKupciComponent } from './page/customers/details-kupci/details-kupci.component';

@NgModule({
  declarations: [
    AppComponent,
    MeniComponent,
    WelcomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AdminRegisterComponent,
    KupacRegisterComponent,
    UsersComponent,
    DetailsUsersComponent,
    TableUsersComponent,
    FormUsersComponent,
    AboutComponent,
    RakijeComponent,
    TableRakijeComponent,
    FormRakijeComponent,
    SearchRakijeComponent,
    DetailsRakijeComponent,
    PorudzbineComponent,
    TablePorudzbineComponent,
    FormPorudzbineComponent,
    DetailsPorudzbineComponent,
    KupciComponent,
    TableKupciComponent,
    FormKupciComponent,
    DetailsKupciComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,  //AngularMaterial forma
    MatButtonModule,
    DragDropModule ,
    MatListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatChipsModule,
    MatTableModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatPaginatorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],//Login[],
  bootstrap: [AppComponent]
})
export class AppModule { }
