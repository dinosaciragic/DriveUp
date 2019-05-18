import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TransportService } from '../../services/transport.service';
import { Transport } from '../../models/transport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posttransport',
  templateUrl: './posttransport.component.html',
  styleUrls: ['./posttransport.component.scss']
})
export class PosttransportComponent implements OnInit {
  constructor(public transportService: TransportService, public router: Router) {}

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

  ngOnInit() {}

  onSubmit() {
    console.log('works');
    this.transportService.addTransport(this.transport).subscribe(transport => {});
  }
}
