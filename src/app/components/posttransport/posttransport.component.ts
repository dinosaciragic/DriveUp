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
    seats: 0,
    price: 0
  };

  ngOnInit() {}

  onSubmit() {
    this.transportService.addTransport(this.transport).subscribe(transport => {
      console.log(transport);
      this.flashMessagesService.show('Transport posted successfully!', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/user']);
    });
  }
}
