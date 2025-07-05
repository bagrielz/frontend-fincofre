import { TestBed } from '@angular/core/testing';

import { FormInitializerService } from './form-initializer.service';

describe('FormInitializerService', () => {
  let service: FormInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
