import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private afA: AngularFireAuth) { }

  login(user){
    return this.afA.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  logOut(){
    this.afA.auth.signOut()
      .then((res) => {
        console.log("User Out");
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
