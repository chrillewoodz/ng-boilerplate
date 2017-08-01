import {
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .catch((err) => {

        if (err instanceof HttpErrorResponse) {

          if (err.status === 401) {
            this.router.navigate(['login']);
          }
        }

        return Observable.throw(err);
      }
    );
  }
}
