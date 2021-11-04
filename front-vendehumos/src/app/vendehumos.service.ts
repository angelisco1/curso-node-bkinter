import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {

  constructor(private http: HttpClient) { }

  getVendehumos() {
    return this.http.get('http://localhost:3001/vendehumos')
  }
}
