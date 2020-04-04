import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment';
import {AuthServiceService} from './auth-service.service';
import { Booking } from './user';

@Injectable({
  providedIn: 'root'
})
export class TurfBackendService {

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  // tslint:disable-next-line: variable-name
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
  updateBooking(status: boolean, players: number, id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.patch<any>(environment.baseUrl + 'api/v1/booking/' + id, {status, players}, {headers: {Authorization: `Bearer ${this.auth.getToken()} ` }});
  }
  deleteBooking(id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.delete<Booking>(environment.baseUrl + 'api/v1/view/' + id, {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  getBooking(id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<Booking>(environment.baseUrl + 'api/v1/booking/' + id, {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  // tslint:disable-next-line: variable-name
  createTournament(tournament_name: string, tournament_date: Date, tournament_prize: number, tournament_poster: string, id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'api/v1/tournament/' + id, {tournament_name, tournament_date, tournament_prize, tournament_poster}, {headers: {Authorization: `Bearer ${this.auth.getToken()} ` }});
  }

  getTournaments() {
    return this.http.get<any>(environment.baseUrl + 'api/v1/tournaments', {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  // tslint:disable-next-line: variable-name
  joinTournament(team_name: string, players: number, payment_method: string, id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'api/v1/join/' + id, {team_name, players, payment_method}, {headers: {Authorization: `Bearer ${this.auth.getToken()} ` }});
  }

  // tslint:disable-next-line: variable-name
  createSchedule(time_slot_one: string, time_slot_two: string, time_slot_three: string, day: string, id: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'api/v1/schedule/' + id, {time_slot_one, time_slot_two, time_slot_three, day}, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }
}
