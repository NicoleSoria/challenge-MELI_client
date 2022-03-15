/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriesObsService } from './categories-obs.service';

describe('Service: CategoriesObs', () => {
  let categoriService: CategoriesObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesObsService]
    });

    categoriService = TestBed.inject(CategoriesObsService);
  });

  it('should ...', () => {
    expect(categoriService).toBeTruthy();
  });

  it('Asignar categories', () => {
    let values = ['cat1', 'cat2', 'cat3'];
    categoriService.toAssingCategories(values);
    expect(categoriService.categories.length).toEqual(3);
    expect(categoriService.categories).toEqual(['cat1', 'cat2', 'cat3']);
  });

  it('Clear categories', () => {
    categoriService.clearCategories();
    expect(categoriService.categories.length).toEqual(0);
  });
});
