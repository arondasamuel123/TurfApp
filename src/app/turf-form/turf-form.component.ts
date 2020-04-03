import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Turf} from '../user';
import {TurfBackendService} from '../turf-backend.service';
@Component({
  selector: 'app-turf-form',
  templateUrl: './turf-form.component.html',
  styleUrls: ['./turf-form.component.css']
})
export class TurfFormComponent implements OnInit {
newTurf = new Turf('', '', 0);

  constructor(private endpoint: TurfBackendService, private router: Router) { }

  create() {
    this.endpoint.createTurf(this.newTurf.turf_name, this.newTurf.turf_location, this.newTurf.price).subscribe(
      response => {
        console.log(response);
        alert('Turf created successfully');
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
        alert('You are not a Turf Owner');
        this.router.navigate(['']);
      }
    );
  }

  ngOnInit() {
  }

}
