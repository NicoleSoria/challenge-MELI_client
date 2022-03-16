/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSearch', () => {
    component.text = 'MLA927821289';
    component.onSearch();
    expect(routerSpy.navigate).toHaveBeenCalledWith([`/items/${component.text}`]);
  });

  it('onSearch', () => {
    component.text = 'Buzo';
    component.onSearch();
    expect(routerSpy.navigate).toHaveBeenCalledWith([`/items`], { queryParams: { search: component.text } });
  });
});
