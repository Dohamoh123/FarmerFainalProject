import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeComponent } from 'src/app/client/home/home.component';
import { AuthService } from 'src/app/servics/auth.service';
import { HomeService } from 'src/app/servics/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  Showloader:boolean=false;
  constructor(private spinner: NgxSpinnerService,private router:Router,public auth:AuthService, service:HomeService) { }
  ngOnInit(): void {
  }
  submit(){
   this.auth.login();
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
  RememberFun(){
    this.auth.RememberFun();
  }

  }


