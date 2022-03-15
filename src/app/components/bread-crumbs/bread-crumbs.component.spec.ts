/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreadCrumbsComponent } from './bread-crumbs.component';
import { CategoriesObsService } from '../../services/categories-obs.service';
import { of } from 'rxjs';

describe('BreadCrumbsComponent', () => {
  let component: BreadCrumbsComponent;
  let fixture: ComponentFixture<BreadCrumbsComponent>;
  let categoriesObsService: CategoriesObsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreadCrumbsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    categoriesObsService = TestBed.inject(CategoriesObsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCategoriesData', () => {
    spyOn(categoriesObsService, 'getCategories').and.returnValue(of(['cat1', 'cat2']));
    component.getCategoriesData();
    expect(component.categories.length).toBeGreaterThan(0);
  });
});
