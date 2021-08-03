import { TestBed } from '@angular/core/testing';

import { DeclaresService } from './declares.service';

describe('DeclaresService', () => {
  let service: DeclaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
