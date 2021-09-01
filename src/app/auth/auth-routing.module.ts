import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { AdminComponent } from '../admin/admin.component';
import { ClientModule } from '../client/client.module';
import { ContactComponent } from '../contact/contact.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ReviewComponent } from '../review/review.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { TestamonialComponent } from '../testamonial/testamonial.component';
import { AuthModule } from './auth.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:AboutusComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'AboutUs',
    component:AboutusComponent
  },
  {
    path:'Client',
    loadChildren:()=>ClientModule
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
