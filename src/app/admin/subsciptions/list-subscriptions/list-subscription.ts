import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from '../../../model/subscription';


@Component({
    selector: 'list-sub',
    templateUrl: './list-subscription.html',
    styleUrls: ['./list-subscription.scss']
})
export class ListSubscriptions implements OnInit {
    dataSource = new MatTableDataSource<Subscription>(SUB_DATA);
    columnDisplay = ['account', 'customer', 'company', 'service', 'amount', 'duration', 'start', 'end', 'status' ]
    constructor() { }

    ngOnInit() { }
}
const SUB_DATA: Subscription[] = [
    {
        accountNo: "97745725564",
        customer: "Jason Bull",
        company: "Rangle.io",
        service: "Web Hosting",
        amount: "209",
        duration: "12 Months",
        startDate: "2/3/2018",
        endDate: "2/3/2019",
        status: "Active"
    },
    {
        accountNo: "475845725564",
        customer: "Danny Taff",
        company: "Soular",
        service: "Web Hosting",
        amount: "59",
        duration: "1 Months",
        startDate: "2/3/2018",
        endDate: "2/3/2019",
        status: "Active"
    }
]