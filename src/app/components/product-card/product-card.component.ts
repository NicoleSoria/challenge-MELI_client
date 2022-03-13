import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../models/product.model';
import { CurrencyEnum } from '../../enums/currency.enum';
import { ConditionEnum } from '../../enums/condition.enum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProducts;

  currencyEnum = CurrencyEnum;
  conditionEnum = ConditionEnum;

  constructor() { }

  ngOnInit() {
  }

}
