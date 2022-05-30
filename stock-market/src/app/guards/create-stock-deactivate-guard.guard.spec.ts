import { TestBed } from '@angular/core/testing';

import { CreateStockDeactivateGuardGuard } from './create-stock-deactivate-guard.guard';

describe('CreateStockDeactivateGuardGuard', () => {
  let guard: CreateStockDeactivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateStockDeactivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
