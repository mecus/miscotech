import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import { Customer } from '../../../model/customer';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns = ['number', 'name', 'company', 'email', 'phone', 'postcode', 'balance'];
  dataSource;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
    ) { 
      
    }

  ngOnInit() {
    this.adminService.getCustomers().map(snapshot => {
      return snapshot.map(c => {
        let uid = c.payload.doc.id;
        let data = c.payload.doc.data();
        return {uid, ...data};
      })
    })
    .subscribe((CUSTOMERS: Customer[])=> {
      this.dataSource = new MatTableDataSource<Customer>(CUSTOMERS);
    })
  }

}
