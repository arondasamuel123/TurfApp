import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Tournament} from '../user';
import {TurfBackendService} from '../turf-backend.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tourna-form',
  templateUrl: './tourna-form.component.html',
  styleUrls: ['./tourna-form.component.css']
})
export class TournaFormComponent implements OnInit {
newTourna = new Tournament('', new Date(), 0, '') ;

  constructor(private endpoint: TurfBackendService, private router: Router, private route: ActivatedRoute) { }

  createTourna() {
    this.route.params.subscribe(params => {
      const id = params.id;
      // tslint:disable-next-line: max-line-length
      this.endpoint.createTournament(this.newTourna.tournament_name, this.newTourna.tournament_date, this.newTourna.tournament_prize, this.newTourna.tournament_poster, id).subscribe(
        response => {
          console.log(response);
          alert('Created tournament successfully');
          this.router.navigate(['']);
        },
        error => {
          console.log(error);
          alert('Something went wrong');
        }


      );

    });
  }

  ngOnInit() {
  }

}
