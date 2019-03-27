import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorObservableService {
  private behave = new BehaviorSubject(false);
  constructor() { }

  setBehaviorView(behave: boolean) {
    this.behave.next(behave);
  }

  getBehaviorUser() {
    return this.behave;
  }
}
