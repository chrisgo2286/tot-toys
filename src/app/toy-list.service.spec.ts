import { TestBed } from '@angular/core/testing';

import { ToyListService } from './toy-list.service';

describe('ToyListService', () => {
  let service: ToyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
