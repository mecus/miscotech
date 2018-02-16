import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
    ) { 
      this.form = fb.group({
        accountNo: [""],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        company: ["", Validators.required],
        email: [""],
        phoneNumber: ["", Validators.required],
        telephoneNumber: [""],
        balance: [""],
        uid: [""],
        address: fb.group({
          address: [""],
          city: [""],
          postCode: [""],
          country: [""]
        })
      });
    }
  sendCustomer(cus){
    if(this.form.status == "INVALID"){
      console.log(this.form.status);
      return null;
    }
    let phone = cus.phoneNumber;
    let num = Number(phone) * 2;
    cus.accountNo = num;
    this.adminService.createCustomer(cus).then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
