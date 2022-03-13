import { Component, OnInit } from '@angular/core';
import { CategoriesObsService } from '../../services/categories-obs.service';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  categories: string[] = [];

  constructor(private categoriesObsService: CategoriesObsService ) { }

  ngOnInit() {
    this.getCategoriesData();
  }

  getCategoriesData() {
    this.categoriesObsService.getCategories().subscribe((resp) => this.categories = resp);
    
  }
}
