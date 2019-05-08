import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}

  //user to bind data for login
  loginUser: login = {
    email: '',
    password: ''
  };

  ngOnInit() {}

  Login() {
    this.usersService.loginUser(this.loginUser).subscribe(user => {
      console.log(user);
      this.router.navigate(['/user']);
    });
  }
}
