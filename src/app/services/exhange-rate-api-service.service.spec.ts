import { TestBed } from '@angular/core/testing';

import { ExhangeRateApiServiceService } from './exhange-rate-api-service.service';

describe('ExhangeRateApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExhangeRateApiServiceService = TestBed.get(ExhangeRateApiServiceService);
    expect(service).toBeTruthy();
  });
});
