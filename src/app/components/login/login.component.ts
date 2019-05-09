import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { login } from '../../models/login';
import { Users } from '@app/models/User';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private usersService: UsersService,
    private flashMessagesService: FlashMessagesService
  ) {}

  //user to bind data for login
  loginUser: login = {
    email: '',
    password: ''
  };

  ngOnInit() {}

  Login() {
    if (this.loginUser.email == '' || this.loginUser.password == '') {
      this.flashMessagesService.show('Fill username and password fields', { cssClass: 'alert-danger', timeout: 2500 });
    }

    this.usersService.loginUser(this.loginUser).subscribe(user => {
      this.usersService.user = user;
      this.usersService.id = this.usersService.user._id;
      this.usersService.logedUser = true;
      this.flashMessagesService.show('Login Success', { cssClass: 'alert-success', timeout: 2500 });
      this.router.navigate(['/user']);
    });
  }
}

/* treba exportat logovanog usera u user componentu i isLoged isto tako, napraviti navbar koji ce biti vidljiv samo ako je isLoged true*/
