import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams;
  constructor(private endpoint: TurfBackendService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.getTeams(id).subscribe(
        response => {
          this.teams = response;
          console.log(this.teams);
        },
        error =>
        console.log(error)

      );

    });
  }

}
