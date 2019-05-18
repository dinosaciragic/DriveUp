import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(public usersService: UsersService, private flashMessagesService: FlashMessagesService) {}

  user: any = {
    id: '',
    email: '',
    username: '',
    password: ''
  };

  ngOnInit() {
    this.user = this.usersService.user;
    if (this.usersService.logedUser == false) {
      this.flashMessagesService.show('You are not logged in!', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }
}
