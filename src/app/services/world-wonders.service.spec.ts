import { TestBed } from '@angular/core/testing';

import { WorldWondersService } from './world-wonders.service';

describe('WorldWondersService', () => {
  let service: WorldWondersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldWondersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
