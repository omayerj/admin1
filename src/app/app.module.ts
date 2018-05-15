import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DecimalPipe } from '@angular/common';
import { appRoutes } from './routes';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { WebapiService } from './server/webapi.service';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CompaniesComponent } from './companies/companies.component';
import { CustomersComponent } from './customers/customers.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    CreateCompanyComponent,
    CreateCustomerComponent,
    CompaniesComponent,
    CustomersComponent,
    CompanyComponent,
    CustomerComponent,
    UpdateCustomerComponent,
    UpdateCompanyComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
