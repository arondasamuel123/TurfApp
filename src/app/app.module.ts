import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TurfComponent } from './turf/turf.component';
import { TournamentComponent } from './tournament/tournament.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TurfFormComponent } from './turf-form/turf-form.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { TournaFormComponent } from './tourna-form/tourna-form.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { JoinFormComponent } from './join-form/join-form.component';
import {HttpClientModule} from '@angular/common/http';
import { TurfDetailsComponent } from './turf-details/turf-details.component';
import { BookingComponent } from './booking/booking.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TurfComponent,
    TournamentComponent,
    RegisterComponent,
    LoginComponent,
    TurfFormComponent,
    BookingFormComponent,
    TournaFormComponent,
    ScheduleFormComponent,
    JoinFormComponent,
    TurfDetailsComponent,
    BookingComponent,
    UpdateFormComponent,
    DeleteBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
