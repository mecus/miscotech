import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { 
  MatButtonModule, MatCheckboxModule, MatInputModule,
  MatFormFieldModule, MatCardModule, MatToolbarModule,
  MatIconModule, MatTableModule, MatSelectModule, MatNativeDateModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatFormFieldModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatTableModule, MatSelectModule, 
    MatDatepickerModule, MatNativeDateModule
  ],
  exports: [ 
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatFormFieldModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatTableModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  declarations: []
})
export class MaterialsModule { }
