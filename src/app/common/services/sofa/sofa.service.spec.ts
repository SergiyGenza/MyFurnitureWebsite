import { TestBed } from '@angular/core/testing';

import { SofaService } from './sofa.service';

describe('SofaService', () => {
  let service: SofaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SofaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
