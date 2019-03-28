import { User } from './../../../interfaces/user.interface';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private actualUser: UserService) { }

  ngOnInit() {
    this.user = this.actualUser.getUser();
  }

}
