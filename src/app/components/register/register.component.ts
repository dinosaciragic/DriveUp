import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //User to add
  user: Users = {
    id: '',
    email: '',
    username: '',
    password: ''
  };

  @ViewChild('userForm') form: any;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.usersService.addUser(this.user).subscribe(user => {
      console.log(user);
    });
  }
}
