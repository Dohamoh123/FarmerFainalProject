import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentYear: Date | any = undefined;
  constructor(private router:Router) { 
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }
  Home(){
    this.router.navigate(["Home"]);
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


}
