import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';
import { CurrencyEnum } from '../../enums/currency.enum';
import { ConditionEnum } from '../../enums/condition.enum';
import { DetailResponseModel } from '../../models/response.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  idProduct: string;
  product: IProduct;

  //Enums
  currencyEnum = CurrencyEnum;
  conditionEnum = ConditionEnum;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {

    // Obtengo de la ruta el id del producto a buscar
    this.idProduct = this.activatedRoute.snapshot.params.id;
    this.getItem();
  }

  getItem() {
    this.productService.getItem(this.idProduct).subscribe((resp: DetailResponseModel) => {
      this.product = resp.item;
    });
  }
}
