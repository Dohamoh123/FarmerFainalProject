import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SliderComponent } from './slider/slider.component';
import { TestamonialComponent } from './testamonial/testamonial.component';


const routes: Routes = [
  
  
  {
    path:'',
    loadChildren:()=>AuthModule
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'slider',
    component:SliderComponent
  },
  {
    path:'testamonial',
    component:TestamonialComponent
  },
  {
    path:'review',
    component:ReviewComponent
  },
  {
    path:'reviews',
    component:ReviewsComponent
  },
  {
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
