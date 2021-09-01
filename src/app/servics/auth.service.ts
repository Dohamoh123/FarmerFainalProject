import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor() { }
  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  constructor(private spinner:NgxSpinnerService,private router:Router) { }
  checked: boolean=false;

  login(){
    console.log(this.email.value);
    console.log(this.password.value);
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
     this. router.navigate(['Client/home']);
    },3000);
  }

  RememberFun(){
    this.checked = true;
     localStorage.setItem('email', JSON.stringify(this.email.value));
     localStorage.setItem('password', JSON.stringify(this.password.value));
 
    //localStorage.getItem(this.email.value);
 
     console.log(localStorage);
     JSON.parse(localStorage.get('email'));
     localStorage.getItem(this.email.value);
     localStorage.getItem('password');
 
 
   }
 
}
