import { Injectable } from '@angular/core';
import { Users } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '@app/models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:3000';

  //User to get info from user logged in
  user: any = {
    id: '',
    email: '',
    username: '',
    password: ''
  };

  //find user by id
  id: any;

  //user to log
  login: login = {
    email: '',
    password: ''
  };

  logedUser: boolean = false;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}/users`);
  }

  getUserbyID(id: any) {
    return this.http.get(`${this.url}/users/user/${id}`);
  }

  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.url}/users/register`, user, httpOptions);
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.url}/users/delete/${id}`);
  }

  loginUser(login: login) {
    return this.http.post(`${this.url}/users/login`, login, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    });
  }

  logoutUser() {
    return this.http.get(`${this.url}/users/logout`, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    });
  }
}
