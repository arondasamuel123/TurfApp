import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
@Component({
  selector: 'app-turf',
  templateUrl: './turf.component.html',
  styleUrls: ['./turf.component.css']
})
export class TurfComponent implements OnInit {
  data: any;
  constructor(private endpoint: TurfBackendService ) { }
  public userRole = localStorage.getItem('currentRole');
  ngOnInit() {
      this.endpoint.getTurfs().subscribe(
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
