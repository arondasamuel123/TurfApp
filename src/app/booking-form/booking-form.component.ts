import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Booking} from '../user';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  newBooking = new Booking(0, new Date(), 0);
  constructor(private endpoint: TurfBackendService, private router: Router, private route: ActivatedRoute) { }

  booking() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.makeBooking(this.newBooking.players, this.newBooking.date, this.newBooking.time, id).subscribe(
        response => {
          console.log(response);
          alert('Sucessfully made booking. Turf owner will be notified');
          this.router.navigate(['']);
        },
        error =>
        console.log(error)

      );

    });
  }

  ngOnInit() {
  }

}
