import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TransportService } from '../../services/transport.service';
import { Transport } from '../../models/transport';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-posttransport',
  templateUrl: './posttransport.component.html',
  styleUrls: ['./posttransport.component.scss']
})
export class PosttransportComponent implements OnInit {
  constructor(
    public transportService: TransportService,
    public usersService: UsersService,
    public router: Router,
    private flashMessagesService: FlashMessagesService
  ) {}

  //Transport
  transport: any = {
    username: this.usersService.user.username,
    title: '',
    text: '',
    workingHours: '',
    workingDays: '',
    car: '',
    seats: '',
    location: '',
    price: '',
    phoneNumber: '',
    email: ''
  };

  ngOnInit() {}

  /**
   * Method for submitting the form
   */
  onSubmit() {
    this.transportService.addTransport(this.transport).subscribe(data => {});
    this.goToFindTransport();
  }

  /**
   * Method for going to find trasport page
   */
  goToFindTransport() {
    this.router.navigate(['/findtransport']);
  }
}
