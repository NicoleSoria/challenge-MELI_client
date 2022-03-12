import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../models/product.model';
import { CurrencyEnum } from '../../enums/currency.enum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProducts;

  currencyEnum = CurrencyEnum;

  constructor() { }

  ngOnInit() {

    console.log(this.product);
    
  }

}
