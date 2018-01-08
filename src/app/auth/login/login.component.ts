import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private _router: Router) {
    this.loginForm = fb.group({
      email: [""],
      password: [""]
    });
   }

   userLogin(user){
     this.authService.login(user)
     .then((res) => {
       console.log(res);
       this._router.navigate(["/admin"]);
     })
     .catch((err) => {
       console.log(err);
     });
   }

  ngOnInit() {

  }

}
