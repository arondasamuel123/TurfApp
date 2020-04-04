import { Component, OnInit } from '@angular/core';
import {Schedule} from '../user';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
newSched = new Schedule('', '', '', '');
  constructor(private endpoint: TurfBackendService, private router: Router, private route: ActivatedRoute) { }
createSched() {
  this.route.params.subscribe(params => {
    const id = params.id;
    // tslint:disable-next-line: max-line-length
    this.endpoint.createSchedule(this.newSched.time_slot_one, this.newSched.time_slot_two, this.newSched.time_slot_three,this.newSched.day, id).subscribe(
      response => {
        console.log(response);
        alert('Sucessfully created schedule');
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
