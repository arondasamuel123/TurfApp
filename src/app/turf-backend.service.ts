import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment';
import {AuthServiceService} from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class TurfBackendService {

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  createTurf(turfName: string, turfLocation: string, price: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(environment.baseUrl + 'api/v1/turf', {turfName, turfLocation, price}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}` }});
  }
  getTurfs() {
    return this.http.get<any>(environment.baseUrl + 'api/v1/turfs', {headers: {Authorization: `Bearer ${this.auth.getToken()}` }});
  }

}
