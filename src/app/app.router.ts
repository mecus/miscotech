import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import * as AUTH from './auth/authIndex';
import * as ADMIN from './admin/adminIdex';

const root:Route = {
    path: '',
      component: HomeComponent, pathMatch: 'full'
  }
const routes = [
    { path: 'login', component: AUTH.LoginComponent },
    root
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]

})
export class AppRouterModule {}
