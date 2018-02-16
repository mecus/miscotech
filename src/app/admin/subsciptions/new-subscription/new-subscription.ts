import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'new-sub',
    templateUrl: './new-sub.component.html',
    styleUrls: ['./new-sub.component.scss']
})
export class NewSubscription implements OnInit {
    subModel: FormGroup;
    startDate = new Date(1990, 0, 1);
    constructor(private fb: FormBuilder) {
        this.subModel = fb.group({
            service: [""],
            startDate: [""],
            endDate: [""],
            amount: [""],
            duration: [""],
            accountNo: [""],
            customer: [""],
            company: [""],
            status: [""]
        });
     }
    subscribe(s){
        console.log(s);
    }

    ngOnInit() { }
}