import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  text: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearch() {
    this.router.navigate(['/items'], {queryParams: {q: this.text}});

    
  }

}
