import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    private flashMessagesService: FlashMessagesService,
    private route: ActivatedRoute
  ) {}

  user: any = {
    id: '',
    email: '',
    username: '',
    password: ''
  };
  private userModel: any;
  private driverID: any;

  ngOnInit() {
    this.driverID = this.route.snapshot.paramMap.get('driverId');
    this.user = this.usersService.user;
    this.usersService.getUserbyID(this.user._id).subscribe(data => {
      this.userModel = data;
      console.log(this.userModel);
    });
    if (this.usersService.logedUser == false) {
      this.flashMessagesService.show('You are not logged in!', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }
}
