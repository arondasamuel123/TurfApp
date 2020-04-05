import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-your-bookings',
  templateUrl: './your-bookings.component.html',
  styleUrls: ['./your-bookings.component.css']
})
export class YourBookingsComponent implements OnInit {
bookings;
  constructor(private endpoint: TurfBackendService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.getUserBookings(id).subscribe(
        response => {
          this.bookings = response;
          console.log(this.bookings);
        },
        error =>
        console.log(error)

      );

    });
  }

}
