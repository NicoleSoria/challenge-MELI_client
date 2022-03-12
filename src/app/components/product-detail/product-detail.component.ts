import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';
import { CurrencyEnum } from '../../enums/currency.enum';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  idProduct: string;
  product: IProduct;
  currencyEnum = CurrencyEnum;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((resp) => {
      this.idProduct = resp.id;
      console.log(this.idProduct);
      this.getItem();
    });
  }

  getItem() {
    this.productService.getItem(this.idProduct).subscribe((resp: any) => {
      this.product = resp.item; 
    });
  }
}
