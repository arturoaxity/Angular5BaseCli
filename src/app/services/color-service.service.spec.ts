import { TestBed, inject } from '@angular/core/testing';

import { ColorServiceService } from './color-service.service';

describe('ColorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorServiceService]
    });
  });

  it('should be created', inject([ColorServiceService], (service: ColorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
