import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  user = {
    name: "John Doe",
    email: "joh@gmail.com"
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
