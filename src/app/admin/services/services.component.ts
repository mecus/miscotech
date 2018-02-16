import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Service } from '../../model/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  displayedColumns = ['service', 'type'];
  dataSource = new MatTableDataSource<Service>(DATA);

  constructor() { }

  ngOnInit() {
  }

}
const DATA: Service[] = [
  {name: "Web Hosting Service", type: "Long Term Service"},
  {name: "Domain Registration", type: "Long Term Service"},
  {name: "Email Hosting", type: "Long Term Service"}
]

