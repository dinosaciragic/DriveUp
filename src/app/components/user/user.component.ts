import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TransportService } from '../../services/transport.service';
import { Transport } from '../../models/transport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    private flashMessagesService: FlashMessagesService,
    public transportService: TransportService,
    public router: Router
  ) {}

  user: any = {
    id: '',
    email: '',
    username: '',
    password: ''
  };

  transportOfUser: Transport[];

  state = false;

  idToDelete = '';

  ngOnInit() {
    this.user = this.usersService.user;
    if (this.usersService.logedUser == false) {
      this.flashMessagesService.show('You are not logged in!', { cssClass: 'alert-danger', timeout: 3000 });
    }

    this.transportService.getTransportsByUser().subscribe(transport => {
      this.transportOfUser = transport;
      console.log(this.transportOfUser);
    });
  }
  changeState() {
    this.state = !this.state;
  }

  deleteTransport(id: string) {
    this.transportService.deleteTransport(id).subscribe(message => {
      console.log(message);
      this.flashMessagesService.show('Deleted Successfully!', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/posttransport']);
    });
  }
}
