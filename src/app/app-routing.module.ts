import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { TournaFormComponent } from './tourna-form/tourna-form.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { JoinFormComponent } from './join-form/join-form.component';
import { TurfDetailsComponent } from './turf-details/turf-details.component';
import { BookingComponent } from './booking/booking.component';
import { UpdateFormComponent } from './update-form/update-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'booking-form/:id', component: BookingFormComponent},
  {path: 'tourna-form/:id', component: TournaFormComponent},
  {path: 'schedule-form', component: ScheduleFormComponent},
  {path: 'join-form/:id', component: JoinFormComponent},
  {path: 'turf/:id', component: TurfDetailsComponent},
  {path: 'view/:id', component: BookingComponent},
  {path: 'update-form/:id', component: UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
