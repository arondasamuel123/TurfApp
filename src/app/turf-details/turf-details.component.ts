import { Component, OnInit } from '@angular/core';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turf-details',
  templateUrl: './turf-details.component.html',
  styleUrls: ['./turf-details.component.css']
})
export class TurfDetailsComponent implements OnInit {
turf;
id: any;
  constructor(private endpoint: TurfBackendService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.getTurf(id).subscribe(
        response => {
          this.turf = response;
          console.log(this.turf);
        },
        error =>
        console.log(error)

      );

    });

  }

}
