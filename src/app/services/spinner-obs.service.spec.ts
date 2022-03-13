/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpinnerObsService } from './spinner-obs.service';

describe('Service: SpinnerObs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerObsService]
    });
  });

  it('should ...', inject([SpinnerObsService], (service: SpinnerObsService) => {
    expect(service).toBeTruthy();
  }));
});
