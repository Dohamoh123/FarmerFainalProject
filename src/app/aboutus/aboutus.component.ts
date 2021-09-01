import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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

  Home(){
    this.router.navigate([''])

  }
}
