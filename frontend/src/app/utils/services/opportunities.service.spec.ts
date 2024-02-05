import { TestBed } from '@angular/core/testing';

import { OpportunitiesService } from './opportunities.service';

describe('OpportunitiesService', () => {
  let service: OpportunitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpportunitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
