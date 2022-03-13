import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: PageComponent,
    children: [
      {path: 'items', component: ProductsListComponent},
      {path: 'items/:id', component: ProductDetailComponent},
    ]
  },
  {path: '**', component: PageComponent},
  {path: '', component: PageComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
