import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  query: string;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((resp) => {
      this.query = resp.q;
      this.getItems();
    })
  }

  getItems() {
    this.productService.getItems(this.query).subscribe((resp) => {
      console.log(resp);
    });
  }

}
