import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerObsService } from '../services/spinner-obs.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  loadingSuscription: Subscription = null;

  /** Injecto el spinnerService para poner suscribirme al observable del loading */
  constructor(private router: Router, 
              private spinnerService: SpinnerObsService) { }

  ngOnInit() {
    this.loadingSuscription = this.spinnerService.getValue().subscribe((resp) => {
      this.isLoading = resp;
    });
  }

  // Al destruirse el componente cierro la subcripcion para evitar que se siga notificando a este componente
  ngOnDestroy(): void {
    this.loadingSuscription.unsubscribe();
  }

  onEmptyState() {
    return this.router.url == '/' ? true : false;
  }
}
