import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SearchComponent } from './search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductsListComponent,
    SearchComponent,
    ProductCardComponent
  ]
})
export class ComponentModule { }
