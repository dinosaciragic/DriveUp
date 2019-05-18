import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '@app/models/transport';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  constructor(private http: HttpClient) {}

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
    return this.http.post<Transport>(`${this.url}/posttransport`, transport, httpOptions);
  }

  getTransports(): Observable<Transport[]> {
    return this.http.get<Transport[]>(`${this.url}/gettransports`);
  }
}
