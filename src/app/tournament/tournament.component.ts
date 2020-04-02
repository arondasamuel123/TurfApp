import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  data: any;
  constructor(private endpoint: TurfBackendService ) { }

  ngOnInit() {
    this.endpoint.getTournaments().subscribe(
      response => {
        this.data = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
