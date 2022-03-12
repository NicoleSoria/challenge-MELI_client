/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriesObsService } from './categories-obs.service';

describe('Service: CategoriesObs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesObsService]
    });
  });

  it('should ...', inject([CategoriesObsService], (service: CategoriesObsService) => {
    expect(service).toBeTruthy();
  }));
});
