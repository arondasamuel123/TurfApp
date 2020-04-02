import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../auth-service.service';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = new User('', '', '');
  constructor(private authentication: AuthServiceService, private router: Router) { }

  registerUser() {
    this.authentication.register(this.newUser.username, this.newUser.email, this.newUser.password).subscribe(
      response => {
        console.log(response);
        alert('You have successfully register');
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        alert('Somethin went wrong');
        this.router.navigate(['/register']);
      }
    );
  }

  ngOnInit() {
  }

}
