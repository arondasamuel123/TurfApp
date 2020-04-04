import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Booking } from '../user';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {

  constructor(private endpoint: TurfBackendService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.deleteBooking(id).subscribe(
        (response: Booking) => {
          alert('Are sure you want to delete your booking?');
          this.router.navigate(['']);
          console.log(response);
        },
        error =>
        console.log(error)

      );

    });
  }

}
