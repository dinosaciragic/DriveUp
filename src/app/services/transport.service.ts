import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '@app/models/transport';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  constructor(private http: HttpClient, public router: Router) {}

  url: string = 'http://localhost:3000';

  //Transport
  transport: any = {
    title: '',
    text: '',
    workingHours: '',
    workingDays: '',
    car: '',
    seats: 0,
    price: 0
  };

  addTransport(transport: Transport): Observable<Transport> {
    return this.http.post<Transport>(`${this.url}/users/posttransport`, transport, httpOptions);
  }

  getTransportsByUser(): Observable<Transport[]> {
    return this.http.get<Transport[]>(`${this.url}/users/login/profile/gettransportsbyuser`);
  }

  getTransports(): Observable<Transport[]> {
    return this.http.get<Transport[]>(`${this.url}/gettransports`);
  }

  deleteTransport(id: string) {
    return this.http.delete(`${this.url}/users/login/profile/gettransportsbyuser/${id}`);
  }
}
