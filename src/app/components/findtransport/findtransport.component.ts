import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { Transport } from '../../models/transport';
import { Router } from '@angular/router';
import { UsersService } from '@app/services/users.service';

@Component({
  selector: 'app-findtransport',
  templateUrl: './findtransport.component.html',
  styleUrls: ['./findtransport.component.scss']
})
export class FindtransportComponent implements OnInit {
  constructor(public transportService: TransportService, public usersService: UsersService, public router: Router) {}

  //Transport
  transports: Transport[];

  ngOnInit() {
    this.transportService.getTransports().subscribe(transports => {
      this.transports = transports;
      console.log(this.transports);
    });
  }
}
