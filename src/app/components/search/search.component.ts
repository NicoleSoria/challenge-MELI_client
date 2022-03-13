import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoriesObsService } from '../../services/categories-obs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  text: string;

  constructor(private router: Router,
              private categoriesObsService: CategoriesObsService) { }

  ngOnInit() {
  }

  onSearch() {
    this.router.navigate(['/items'], {queryParams: {search: this.text}});
  }

  goToHome() {
    this.router.navigate(['/']);
    this.text = null;
    this.categoriesObsService.clearCategories();
  }

}
