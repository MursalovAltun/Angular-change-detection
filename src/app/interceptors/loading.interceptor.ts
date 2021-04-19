import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, finalize} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.set(true);

    return next.handle(req).pipe(
      delay(1500),
      finalize(() => {
        this.loadingService.set(false);
      })
    );
  }
}
