import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) { }

  getIPDetails(): Observable<any> {
    // return this.http.get('http://ip-api.com/json/');
    return this.http.get('https://ipapi.co/json/')
  }

  addVisitor(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/visitor/log', data);
  }
}
