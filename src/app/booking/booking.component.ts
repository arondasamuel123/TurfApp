import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
bookings;
  constructor(private endpoint: TurfBackendService,  private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.getBooking(id).subscribe(
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
