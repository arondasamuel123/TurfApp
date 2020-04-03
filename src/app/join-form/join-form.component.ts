import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {TurfBackendService} from '../turf-backend.service';
import { Join } from '../user';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.css']
})
export class JoinFormComponent implements OnInit {
joinTourna = new Join('', 0, '');
  constructor(private endpoint: TurfBackendService,   private router: Router, private route: ActivatedRoute) {

  }
joinForm() {
  this.route.params.subscribe(params => {
    const id = params.id;
    this.endpoint.joinTournament(this.joinTourna.team_name, this.joinTourna.players, this.joinTourna.payment_method, id).subscribe(
      response => {
        console.log(response);
        alert('Successfully joined tournament');
        this.router.navigate(['']);
      },
      error =>
        console.log(error)
      // console.log(this.form)
    );

  });
}
  ngOnInit() {
  }

}
