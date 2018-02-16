import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import * as CUSTOMER from './customers-container/customerIndex';
import * as ADMIN from './adminIdex';
import * as SERVICE from './services/serviceIndex';
import * as SUB from './subsciptions/subIndex';


const routes = [
    {
        path: 'admin',
        component: ADMIN.AdminComponent,
        children: [
            {
                path: "",
                children: [
                    { path: 'customers', component: CUSTOMER.CustomersComponent },
                    { path: 'customers/new', component: CUSTOMER.NewCustomerComponent },
                    { path: 'customers/edit', component: CUSTOMER.EditCustomerComponent },
                    { path: 'dashboard', component: ADMIN.DashboardComponent },
                    { path: 'services', component: SERVICE.ServicesComponent },
                    { path: 'services/new', component: SERVICE.NewServiceComponent },
                    { path: 'subscriptions', component: SUB.ListSubscriptions },
                    { path: 'subscription', component: SUB.SubsciptionComponent },
                    { path: 'subscription/new', component: SUB.NewSubscription },
                ]
            }
        ]
    
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})

export class AdminRouter {}