import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { WebapiService } from './server/webapi.service';
import { Routes } from '@angular/router'
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CompaniesComponent } from './companies/companies.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


export const appRoutes: Routes = [
  {
    path: 'Administrator',
    children: [
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'createCompany',
        component: CreateCompanyComponent
      },
      {
        path: 'updateCompany',
        component: UpdateCompanyComponent
      },
      {
        path: 'Company',
        component: CompanyComponent
      },
      {
        path: 'Companies',
        component: CompaniesComponent
      },
      {
        path: 'createCustomer',
        component: CreateCustomerComponent
      },
      {
        path: 'updateCustomer',
        component: UpdateCustomerComponent
      },
      {
        path: 'Customers',
        component: CustomersComponent
      },
      {
        path: 'Customer',
        component: CustomerComponent
      }
    ]
  }, {
    path: '', redirectTo: '/Administrator', pathMatch: 'full'
  }
];