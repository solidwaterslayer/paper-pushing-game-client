import { TestBed } from '@angular/core/testing';

import { TransactionManagerService } from './level.service';

describe('TransactionManagerService', () => {
  let service: TransactionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});