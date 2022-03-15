/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../../services/product.service';
import { CategoriesObsService } from '../../services/categories-obs.service';
import { ProductsTestingService } from './stups/products-list.stups';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productHttp: ProductService;
  let categoryService: CategoriesObsService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ProductService, useClass: ProductsTestingService },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ search: 'mesa' })
          }
        },
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    productHttp = TestBed.inject(ProductService);
    categoryService = TestBed.inject(CategoriesObsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.query).toEqual('mesa');
  });

  it('test getItems', () => {
    spyOn(productHttp, 'getItems').and.callThrough();
    spyOn(categoryService, 'toAssingCategories').and.callThrough();
    component.getItems();
    expect(component.products.length).toEqual(4);
    expect(categoryService.toAssingCategories).toHaveBeenCalled();
  });

  it('openProduct', () => {
    let idProduct = '12345'
    component.openProduct(idProduct)
    expect(routerSpy.navigate).toHaveBeenCalledWith([`items/${idProduct}`])
  });
});
