import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './share/materials/materials.module';
import { AppRouterModule } from './app.router';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AdminModule } from './admin/admin.module';
import { AdminRouter } from './admin/admin.router';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(environment.firebaseConfig, "miscotech"),
    AngularFireAuthModule, AngularFirestoreModule,
    BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MaterialsModule, RouterModule, AppRouterModule, AuthModule,
    AdminModule, AdminRouter
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
