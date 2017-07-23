import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {CustomResponse} from '@interfaces/custom-response.interface';
import {HttpWrapper} from '@services/http-wrapper.service';

@Injectable()

export class Api {

  constructor(private http: HttpWrapper, private router: Router) {}

  private errorCallback(err: any, caught: Observable<any>): Observable<any> {

    if (err.status === 401) {
      this.router.navigate(['login']);
    }

    return Observable.throw({response: err, caught: caught});
  }

  get(url: string, params?: any): Observable<CustomResponse> {

    return this.http.get(url, params)
      .map((res: Response) => res.json() as CustomResponse)
      .catch(this.errorCallback.bind(this));
  }

  post(url: string, data: any, params?: any): Observable<CustomResponse> {
    return this.http.post(url, data, params)
      .map((res: Response) => res.json() as CustomResponse)
      .catch(this.errorCallback.bind(this));
  }

  put(url: string, data: any, params?: any): Observable<CustomResponse> {

    return this.http.put(url, data, params)
      .map((res: Response) => res.json() as CustomResponse)
      .catch(this.errorCallback.bind(this));
  }

  delete(url: string, params?: any): Observable<CustomResponse> {

    return this.http.delete(url, params)
      .map((res: Response) => res.json() as CustomResponse)
      .catch(this.errorCallback.bind(this));
  }
}
