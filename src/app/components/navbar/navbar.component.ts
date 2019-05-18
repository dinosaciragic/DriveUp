import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit() {}
}
