import { TestBed } from '@angular/core/testing';

import { BackbuttonGuard } from './backbutton.guard';

describe('BackbuttonGuard', () => {
  let guard: BackbuttonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackbuttonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
