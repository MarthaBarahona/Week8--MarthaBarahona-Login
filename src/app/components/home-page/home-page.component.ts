import { BehaviorObservableService } from './../../services/behavior-observable.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(public state: BehaviorObservableService, public service: LocalStorageService) { }

  ngOnInit() {
    console.log(this.state);
  }

}
