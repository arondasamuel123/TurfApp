import { TestBed } from '@angular/core/testing';

import { TurfBackendService } from './turf-backend.service';

describe('TurfBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurfBackendService = TestBed.get(TurfBackendService);
    expect(service).toBeTruthy();
  });
});
