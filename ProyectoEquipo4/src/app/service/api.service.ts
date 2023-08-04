import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from '../models/responsePayPal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:4000/create-order';
  private body: any;

  constructor(private http: HttpClient) { }

  public getData (): Observable<response>{
    return this.http.post<response>(this.url, this.body);
  }
}
