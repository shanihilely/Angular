import { TestBed } from '@angular/core/testing';

import { StockLoadResolverGuard } from './stock-load-resolver.guard';

describe('StockLoadResolverGuard', () => {
  let guard: StockLoadResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StockLoadResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
