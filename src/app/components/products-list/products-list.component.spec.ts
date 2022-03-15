/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../../services/product.service';
import { CategoriesObsService } from '../../services/categories-obs.service';
import { ProductsTestingService } from './stups/products-list.stups';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productHttp: ProductService;
  let categoryService: CategoriesObsService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ProductService, useClass: ProductsTestingService }
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
  });

  it('test getItems', () => {
    spyOn(productHttp, 'getItems').and.callThrough();
    spyOn(categoryService, 'toAssingCategories').and.callThrough();
    component.getItems();
    expect(component.products.length).toEqual(4);
    expect(categoryService.toAssingCategories).toHaveBeenCalled();
  });
});
