import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CategoriesObsService } from '../../services/categories-obs.service';
import { IProducts } from '../../models/product.model';
import { SpinnerObsService } from '../../services/spinner-obs.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  query: string;
  products: IProducts[] = [];
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoriesObsService: CategoriesObsService,
    private router: Router,
    private spinnerObsService: SpinnerObsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((resp) => {
      this.query = resp.search;
      this.getItems();
      this.showEmptySatate();
    });
  }

  getItems() {
    this.productService.getItems(this.query).subscribe((resp: any) => {
      this.products = resp.items.splice(0, 4);
      this.categoriesObsService.toAssingCategories(resp.categories);
    });
  }

  openProduct(idProduct: string) {
    this.router.navigate([`items/${idProduct}`]);
  }

  showEmptySatate() {
    this.spinnerObsService.getValue().subscribe((resp) => {
      this.isLoading = resp;
    });
  }

}
