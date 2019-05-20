import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {}

  Logout() {
    this.usersService.logoutUser().subscribe(data => {
      this.usersService.logedUser = false;
      this.flashMessagesService.show('Logout Success', { cssClass: 'alert-success', timeout: 2500 });
    });
  }
}
