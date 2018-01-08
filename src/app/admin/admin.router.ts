import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import * as CUSTOMER from './customers-container/customerIndex';
import * as ADMIN from './adminIdex';


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