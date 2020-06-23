import { TestBed } from '@angular/core/testing';

import { ITableSharedFunctionService } from './i-table-shared-function.service';

describe('ITableSharedFunctionService', () => {
  let service: ITableSharedFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ITableSharedFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
