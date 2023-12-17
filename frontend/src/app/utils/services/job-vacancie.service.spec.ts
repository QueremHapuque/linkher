import { TestBed } from '@angular/core/testing';

import { JobVacancieService } from './job-vacancie.service';

describe('JobVacancieService', () => {
  let service: JobVacancieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobVacancieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
