import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { AddNewServiceComponent } from './add-new-service/add-new-service.component';
import { AddNewContractComponent } from './add-new-contract/add-new-contract.component';
import { AddNewContractDetailComponent } from './add-new-contract-detail/add-new-contract-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContractComponent } from './contract/contract.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AddNewCustomerComponent,
    AddNewEmployeeComponent,
    AddNewServiceComponent,
    AddNewContractComponent,
    AddNewContractDetailComponent,
    CustomerComponent,
    EmployeeComponent,
    ContractComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
