import { TestBed } from '@angular/core/testing';

import { PortionService } from './portion.service';

describe('PortionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortionService = TestBed.get(PortionService);
    expect(service).toBeTruthy();
  });
});
