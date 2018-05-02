import { TestBed, inject } from '@angular/core/testing';

import { AssociateServiceService } from './associate-service.service';

describe('AssociateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociateServiceService]
    });
  });

  it('should be created', inject([AssociateServiceService], (service: AssociateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
