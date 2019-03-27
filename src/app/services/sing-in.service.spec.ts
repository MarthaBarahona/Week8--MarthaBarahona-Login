import { TestBed } from '@angular/core/testing';

import { SingInService } from './sing-in.service';

describe('SingInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingInService = TestBed.get(SingInService);
    expect(service).toBeTruthy();
  });
});
