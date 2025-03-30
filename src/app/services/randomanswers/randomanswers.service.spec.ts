import { TestBed } from '@angular/core/testing';

import { RandomanswersService } from './randomanswers.service';

describe('RandomanswersService', () => {
  let service: RandomanswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomanswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
