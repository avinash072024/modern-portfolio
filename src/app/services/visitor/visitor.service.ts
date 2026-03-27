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
    debugger;
    return this.http.get('http://ip-api.com/json/');
  }

  addVisitor(data: any): Observable<any> {
    debugger;
    return this.http.post(environment.apiUrl + '/visitor/log', data);
  }
}
