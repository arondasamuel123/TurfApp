import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { TournaFormComponent } from './tourna-form/tourna-form.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'booking-form', component: BookingFormComponent},
  {path: 'tourna-form', component: TournaFormComponent},
  {path: 'schedule-form', component: ScheduleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
