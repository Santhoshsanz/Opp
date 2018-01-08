import { TestBed, inject } from '@angular/core/testing';

import { OpportunitiesService } from './opportunities.service';

describe('OpportunitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpportunitiesService]
    });
  });

  it('should be created', inject([OpportunitiesService], (service: OpportunitiesService) => {
    expect(service).toBeTruthy();
  }));
});
