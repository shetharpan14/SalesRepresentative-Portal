import { TestBed } from '@angular/core/testing';

import { SalesRepresentativeDetailsService } from './sales-representative-details.service';

describe('SalesRepresentativeDetailsService', () => {
  let service: SalesRepresentativeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesRepresentativeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
