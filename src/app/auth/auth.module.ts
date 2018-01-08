import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as AUTH from './authIndex';
import { MaterialsModule } from '../share/materials/materials.module';

@NgModule({
  imports: [
    CommonModule, MaterialsModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ AUTH.LoginComponent ]
})
export class AuthModule { }
