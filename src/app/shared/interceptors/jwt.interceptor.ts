import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AppConstants} from '@constants/app-constants.constant';
import {ClientStorage} from '@services/client-storage.service';

@Injectable()

export class JWTInterceptor implements HttpInterceptor {

  constructor(private cs: ClientStorage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Only change the request if making internal API calls
    if (req.url.includes(AppConstants.host)) {

      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${this.cs.getItem(AppConstants.token)}`
        }
      });
    }

    return next.handle(req);
  }
}
