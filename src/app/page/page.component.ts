import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerObsService } from '../services/spinner-obs.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  isLoading: boolean;

  constructor(private router: Router, 
              private spinnerService: SpinnerObsService) { }

  ngOnInit() {
    this.spinnerService.getValue().subscribe((resp) => {
      this.isLoading = resp;
    });
  }

  onEmptyState() {
    return this.router.url == '/' ? true : false;
  }
}
