import { TestBed, inject } from '@angular/core/testing';

import { DesenharService } from './desenhar.service';

describe('DesenharService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesenharService]
    });
  });

  it('should be created', inject([DesenharService], (service: DesenharService) => {
    expect(service).toBeTruthy();
  }));
});
