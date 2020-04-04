import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
schedule: any;
  constructor(private endpoint: TurfBackendService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.getSchedules(id).subscribe(
        response => {
          this.schedule = response;
          console.log(this.schedule);
        },
        error =>
        console.log(error)

      );

    });
  }

}
