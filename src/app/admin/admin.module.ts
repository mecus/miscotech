import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as ADMIN from './adminIdex';
import * as CUSTOMER from './customers-container/customerIndex';
import { AdminRouter } from './admin.router';
import { MaterialsModule } from '../share/materials/materials.module';
import { NewCustomerComponent } from './customers-container/new-customer/new-customer.component';
import { EditCustomerComponent } from './customers-container/edit-customer/edit-customer.component';
import { ServicesComponent } from './services/services.component';
import * as SERVICE from './services/serviceIndex';
import * as SUB from './subsciptions/subIndex';

@NgModule({
  imports: [
    CommonModule, AdminRouter, MaterialsModule,
    AngularFireModule, AngularFirestoreModule,
    FormsModule, ReactiveFormsModule 
  ],
  declarations: [
    ADMIN.DashboardComponent, ADMIN.AdminComponent,
    ADMIN.HorizontalNavigation, ADMIN.VarticalNavigation,
    

    CUSTOMER.CustomersComponent, CUSTOMER.NewCustomerComponent,
    CUSTOMER.EditCustomerComponent,
    SERVICE.ServicesComponent, SERVICE.NewServiceComponent, 
    SUB.SubsciptionComponent, SUB.ListSubscriptions,
    SUB.NewSubscription
  ]
})
export class AdminModule { }
