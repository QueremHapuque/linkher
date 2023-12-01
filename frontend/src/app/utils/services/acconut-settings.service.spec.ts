import { TestBed } from '@angular/core/testing';

import { AcconutSettingsService } from './acconut-settings.service';

describe('AcconutSettingsService', () => {
  let service: AcconutSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcconutSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
