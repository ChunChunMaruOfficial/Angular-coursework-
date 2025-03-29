import { TestBed } from '@angular/core/testing';

import { GetRandomService } from './get-random.service';

describe('GetRandomService', () => {
  let service: GetRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
