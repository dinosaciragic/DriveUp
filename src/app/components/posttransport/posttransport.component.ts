import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostData } from '../../models/PostData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-posttransport',
  templateUrl: './posttransport.component.html',
  styleUrls: ['./posttransport.component.scss']
})
export class PosttransportComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  postData: PostData = {
    title: '',
    text: '',
    price: 0
  };

  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  Post() {
    console.log('pos pressed');

    //// TODO: Make posttransport service
    //// TODO: Make transport table in db
  }
}
