import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {TurfBackendService} from '../turf-backend.service';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.css']
})
export class JoinFormComponent implements OnInit {
form: FormGroup;
  constructor(private fb: FormBuilder, private endpoint: TurfBackendService,   private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      teamName: [''],
      players: [''],
      payment_method: ['']
    });
  }
joinForm() {
  this.route.params.subscribe(params => {
    const id = params.id;
    this.endpoint.joinTournament(this.form.value, id).subscribe(
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
