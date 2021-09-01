import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    fullName:new FormControl('',Validators.required),
    address:new FormControl(''),
    phoneNumber:new FormControl('')
  }
  )

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.formRegister.value);
  }
  gotToLogin(){
    this.router.navigate(['Login'])

  }
  password(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const  confirmPassword  = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
}
Login(){
  this.router.navigate(["Login"]);
}
Register(){
  this.router.navigate(["Register"]);
}
Contact(){
  this.router.navigate(["Contact"]);

}
AboutUs(){
  this.router.navigate(["AboutUs"]);
}
gotToRegister(){
  this.router.navigate(['Register'])
}
Home(){
  this.router.navigate([''])

}

}

