import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { login } from '../../models/login';
import { Users } from '@app/models/User';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    public usersService: UsersService,
    private flashMessagesService: FlashMessagesService
  ) {}

  //user to bind data for login
  loginUser: login = {
    email: '',
    password: ''
  };

  ngOnInit() {}

  Login() {
    this.usersService.loginUser(this.loginUser).subscribe(
      user => {
        this.usersService.user = user;
        this.usersService.id = this.usersService.user._id;
        this.usersService.logedUser = true;
        this.flashMessagesService.show('Login Success', { cssClass: 'alert-success', timeout: 2500 });
        this.router.navigate(['/user']);
      },
      err => {
        this.flashMessagesService.show('User does not exists', { cssClass: 'alert-danger', timeout: 2500 });
      }
    );
  }
}
