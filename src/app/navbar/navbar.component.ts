import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDisplayName = '';
  constructor(private router: Router) { }
logOut() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  localStorage.removeItem('currentRole');
  this.router.navigate(['/login']);

}
  ngOnInit() {
    this.userDisplayName = localStorage.getItem('currentUser');
  }

}
