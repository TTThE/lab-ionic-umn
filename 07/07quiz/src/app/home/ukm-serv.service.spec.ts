import { TestBed } from '@angular/core/testing';

import { UkmServService } from './ukm-serv.service';

describe('UkmServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UkmServService = TestBed.get(UkmServService);
    expect(service).toBeTruthy();
  });
});
