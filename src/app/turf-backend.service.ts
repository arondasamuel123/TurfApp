import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment';
import {AuthServiceService} from './auth-service.service';

import { Join } from './user';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TurfBackendService {

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  createTurf(turf_name: string, turf_location: string, price: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'api/v1/turf', {turf_name, turf_location, price}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}` }});
  }
  getTurfs() {
    return this.http.get<any>(environment.baseUrl + 'api/v1/turfs', {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  getTurf(id: number) {
    return this.http.get<any>(environment.baseUrl + 'api/v1/turf/' + id, {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  makeBooking(players: number, date: Date, time: number, id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'api/v1/booking/' + id, {players, date, time}, {headers: {Authorization: `Bearer ${this.auth.getToken()} ` }});
  }
  getBooking(id: number) {
    return this.http.get<any>(environment.baseUrl + 'api/v1/booking/' + id, {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  createTournament(tournamentName: string, tournamentDate: Date, tournamentPrize: number, tournamentPoster: string, id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'api/v1/tournament/' + id, {tournamentName, tournamentDate, tournamentPrize, tournamentPoster}, {headers: {Authorization: `Bearer ${this.auth.getToken()} ` }});
  }

  getTournaments() {
    return this.http.get<any>(environment.baseUrl + 'api/v1/tournaments', {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  joinTournament(join: Join, id: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<{token: string}>(environment.baseUrl + 'api/v1/join/' + id, {join}, {headers: {Authorization: `Bearer ${this.auth.getToken()} ` }});
  }
}
