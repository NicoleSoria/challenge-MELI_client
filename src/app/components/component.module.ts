import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SearchComponent } from './search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductsListComponent,
    SearchComponent,
    ProductCardComponent,
    BreadCrumbsComponent,
    EmptyStateComponent
  ],
  exports: [
    SearchComponent,
    BreadCrumbsComponent,
    EmptyStateComponent
  ]
})
export class ComponentModule { }
