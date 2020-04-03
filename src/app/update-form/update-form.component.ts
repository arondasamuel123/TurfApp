import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Booking, Status } from '../user';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
players: any;
date: Date;
time: number;
updateStatus = new Status(false, 0);
  constructor(private endpoint: TurfBackendService,  private route: ActivatedRoute, private router: Router) { }

  updateBooking() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.updateBooking(this.updateStatus.status, this.updateStatus.players , id).subscribe(
        response => {
          console.log(response);
          alert('Booking updated');
          this.router.navigate(['']);
        },
        error =>
        console.log(error)

      );

    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.getBooking(id).subscribe(
        (response: Booking) => {
          this.players = response.players;
          this.date = response.date;
          this.time = response.time;
          console.log(this.players);
        },
        error =>
        console.log(error)

      );

    });
  }

}
