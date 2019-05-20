import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/User';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(
    public usersService: UsersService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.usersService.addUser(this.user).subscribe(
      user => {
        console.log(user);
        this.flashMessagesService.show('User created successfully', { cssClass: 'alert-success', timeout: 2500 });
        this.router.navigate(['/login']);
      },
      err => {
        this.flashMessagesService.show('User already exists or fields are blank', {
          cssClass: 'alert-danger',
          timeout: 2500
        });
      }
    );
  }
}
