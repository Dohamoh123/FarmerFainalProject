import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email=new FormControl('',[Validators.required]);

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Login(){
    this.router.navigate(["Login"]);
  }
  Contact(){
    this.router.navigate(["Contact"]);

  }
  AboutUs(){
    this.router.navigate(["AboutUs"]);
  }
  Register(){
    this.router.navigate(['Register'])
  }
  Home(){
    this.router.navigate([''])

  }
  
}
