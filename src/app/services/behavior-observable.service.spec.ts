import { TestBed } from '@angular/core/testing';

import { BehaviorObservableService } from './behavior-observable.service';

describe('BehaviorObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviorObservableService = TestBed.get(BehaviorObservableService);
    expect(service).toBeTruthy();
  });
});
