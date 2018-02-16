import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'new-service',
    templateUrl: './new.service.component.html',
    styleUrls: ['./new.service.component.scss']
})
export class NewServiceComponent implements OnInit {
    serviceModel: FormGroup;
    serviceType = [
        {name: "long term"},
        {name: "short term"},
        {name: "one off"},
    ]
    constructor(
        private fb: FormBuilder
    ) { 
        this.serviceModel = fb.group({
            name: ["", Validators.required],
            type: ["", Validators.required]
        });
    }
    saveService(s){
        console.log(s);
    }

    ngOnInit() { }
}