import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SearchComponent } from './search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { AtomSpinnerModule, SpringSpinnerModule } from 'angular-epic-spinners';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpringSpinnerModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductsListComponent,
    SearchComponent,
    ProductCardComponent,
    BreadCrumbsComponent,
    EmptyStateComponent,
    SpinnerComponent
  ],
  exports: [
    SearchComponent,
    BreadCrumbsComponent,
    EmptyStateComponent,
    SpinnerComponent
  ]
})
export class ComponentModule { }
