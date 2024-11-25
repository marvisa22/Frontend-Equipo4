import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from '../models/responsePayPal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://backend-equipo4.onrender.com';

  private body: any = {
                        "purchase_units": [
                            {
                                "amount": {
                                    "currency_code": "USD",
                                    "value": ""
                                }
                            }
                        ]
                    };

  constructor(private http: HttpClient) { }

  public getData (value: string): Observable<response>{
    this.body.purchase_units[0].amount.value = value;
    return this.http.post<response>(this.url, this.body);
  }
}
