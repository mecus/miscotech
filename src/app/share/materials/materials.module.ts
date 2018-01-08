import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, MatCheckboxModule, MatInputModule,
  MatFormFieldModule, MatCardModule, MatToolbarModule,
  MatIconModule, MatTableModule, MatSelectModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatFormFieldModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatTableModule, MatSelectModule
  ],
  exports: [ 
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatFormFieldModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatTableModule, MatSelectModule
  ],
  declarations: []
})
export class MaterialsModule { }
