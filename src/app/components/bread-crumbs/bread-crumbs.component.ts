import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriesObsService } from '../../services/categories-obs.service';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {

  categories: string[] = [];
  categorySuscription: Subscription = null;

  constructor(private categoriesObsService: CategoriesObsService ) { }

  ngOnInit() {
    this.getCategoriesData();
  }

  // Al destruirse el componente cierro la subcripcion para evitar suscripciones colgadas
  ngOnDestroy(): void {
    this.categorySuscription.unsubscribe();
  }

  getCategoriesData() {
    this.categorySuscription = this.categoriesObsService.getCategories().subscribe((resp) => this.categories = resp);
  }
}
