import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerObsService } from '../services/spinner-obs.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    constructor( private spinnerService: SpinnerObsService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(req).pipe( finalize(() => {this.spinnerService.hide()}) )
    }
}