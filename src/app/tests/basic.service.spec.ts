import { TestBed, inject } from '@angular/core/testing';

import { BasicService } from '../services/basic.service';

describe('BasicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicService]
    });
  });

  it('should ...', inject([BasicService], (service: BasicService) => {
    expect(service).toBeTruthy();
  }));
});
