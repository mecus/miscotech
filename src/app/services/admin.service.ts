import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../model/customer';

@Injectable()
export class AdminService {
    customers: AngularFirestoreCollection<Customer>;
    constructor(private afs: AngularFirestore){
        this.customers = afs.collection<Customer>('customers');
    }

    createCustomer(customer){
        return this.customers.add(customer);
    }
    getCustomers(){
        return this.customers.snapshotChanges();
    }
}