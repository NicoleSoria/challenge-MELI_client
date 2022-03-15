/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../../services/product.service';
import { ProductTestingService } from './stups/product-detail.stups';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productHttp: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ProductService, useClass: ProductTestingService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '12345' } }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productHttp = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.idProduct).toEqual('12345');
  });

  it('test getItem', () => {
    spyOn(productHttp, 'getItem').and.callThrough();
    component.getItem();
    expect(typeof component.product).toBe('object')

    let mockProduct: IProduct = {
      id: '12345',
      title: 'product 1',
      free_shipping: true,
      picture: '',
      condition: 'new',
      price: {
        currency: 'ARS',
        amount: 1234,
        decimals: 12
      },
      sold_quantity: 2,
      description: 'description',
    }
    expect(component.product).toEqual(mockProduct)
  });
});
