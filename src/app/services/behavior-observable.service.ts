import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorObservableService {
  private behave = new BehaviorSubject(false);
  constructor() { }
  get behavior() {
    return this.behave.value;
  }

  set behavior(newState: boolean) {
    this.behave.next(newState);
  }
}
