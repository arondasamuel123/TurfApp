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
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamsComponent } from './teams/teams.component';
import { YourBookingsComponent } from './your-bookings/your-bookings.component';


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
  {path: 'update-form/:id', component: UpdateFormComponent},
  {path: 'delete/:id', component: DeleteBookingComponent},
  {path: 'create-shed/:id', component: ScheduleFormComponent},
  {path: 'view-shed/:id', component: ScheduleComponent},
  {path: 'view-teams/:id', component: TeamsComponent},
  {path: 'your-bookings/:id', component: YourBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
