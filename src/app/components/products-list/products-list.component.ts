import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CategoriesObsService } from '../../services/categories-obs.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  query: string;

  constructor(private activatedRoute: ActivatedRoute, 
              private productService: ProductService,
              private categoriesObsService: CategoriesObsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((resp) => {
      this.query = resp.search;
      this.getItems();
    })
  }

  getItems() {
    this.productService.getItems(this.query).subscribe((resp: any) => {
      console.log(resp);

      this.categoriesObsService.toAssingCategories(resp.categories);
    });
  }

}
