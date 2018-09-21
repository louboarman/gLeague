import { TestBed } from '@angular/core/testing';

import { HoleScoreService } from './hole-score.service';

describe('HoleScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoleScoreService = TestBed.get(HoleScoreService);
    expect(service).toBeTruthy();
  });
});
