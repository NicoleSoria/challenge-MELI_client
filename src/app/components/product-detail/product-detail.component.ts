import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../../models/product.model';
import { CurrencyEnum } from '../../enums/currency.enum';
import { ConditionEnum } from '../../enums/condition.enum';
import { DetailResponseModel } from '../../models/response.model';
import { SpinnerObsService } from '../../services/spinner-obs.service';
import { CategoriesObsService } from '../../services/categories-obs.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  idProduct: string;
  product: IProduct;
  isLoading: boolean = true;

  //Enums
  currencyEnum = CurrencyEnum;
  conditionEnum = ConditionEnum;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private spinnerObsService: SpinnerObsService
  ) { }

  ngOnInit() {

    // Obtengo de la ruta el id del producto a buscar
    this.activatedRoute.params.subscribe((resp) => {
      this.idProduct = resp.id;
      this.getItem();
    });
    this.showEmptySatate();
  }

  getItem() {
    this.productService.getItem(this.idProduct).subscribe((resp: DetailResponseModel) => {
      this.product = resp.item;
    });
  }

  // Función para ocultar el empty state si el loading esta activo
  showEmptySatate() {
    this.spinnerObsService.getValue().subscribe((resp) => {
      this.isLoading = resp;
    });
  }
}
