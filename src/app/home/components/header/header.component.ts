import { BehaviorObservableService } from './../../../services/behavior-observable.service';
import { UserService } from './../../../services/user.service';
import { User } from './../../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  isSelected = false;
  constructor(
    public state: BehaviorObservableService,
    public service: LocalStorageService,
    public userInfo: UserService) {}

  ngOnInit() {
    this.user = this.userInfo.getUser();
    console.log(this.user);
  }

  changeView() {
    this.isSelected = !this.isSelected;
  }
}
