import {Injectable, OnDestroy} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

import {AppConstants} from '@constants/app-constants.constant';
import {ClientStorage} from '@services/client-storage.service';

@Injectable()

/* Wrapper for Angular's Http class, let's us provide headers and other things on every request */
export class HttpWrapper implements OnDestroy {

  constructor(
    private cs: ClientStorage,
    private http: Http
  ) {}

  ngOnDestroy() {

  }

  convertJSONtoParams(json: any): URLSearchParams {

    const params: URLSearchParams = new URLSearchParams();

    for (const key in json) {

      if (json.hasOwnProperty(key) && (json[key] || json[key] === false || json[key] === 0)) {

        if (json[key].constructor === Array && !json[key].length) {
          continue;
        }
        else {
          params.set(key, json[key]);
        }
      }
    }

    return params;
  }

  getRequestOptions(params?: any): RequestOptions {

    const headers = new Headers();

    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');

    this.createAuthorizationHeader(headers);

    return new RequestOptions({
      headers: headers,
      search: params ? this.convertJSONtoParams(params) : null
    });
  }

  createAuthorizationHeader(headers: Headers): void {
    headers.append('Authorization', `Basic ${this.cs.getItem(AppConstants.token)}`);
  }

  get(url: string, params?: any): Observable<Response> {

    const options: RequestOptions = this.getRequestOptions(params);

    return this.http.get(AppConstants.host + url, options);
  }

  post(url: string, data: any, params?: any): Observable<Response> {

    const options: RequestOptions = this.getRequestOptions(params);

    return this.http.post(AppConstants.host + url, data, options);
  }

  put(url: string, data: any, params?: any): Observable<Response> {

    const options: RequestOptions = this.getRequestOptions(params);

    return this.http.put(AppConstants.host + url, data, options);
  }

  delete(url: string, params?: any): Observable<Response> {

    const options: RequestOptions = this.getRequestOptions(params);

    return this.http.delete(AppConstants.host + url, options);
  }

  patch(url: string, data: any, params?: any): Observable<Response> {

    const options: RequestOptions = this.getRequestOptions(params);

    return this.http.patch(AppConstants.host + url, data, options);
  }

  head(url: string, params?: any): Observable<Response> {

    const options: RequestOptions = this.getRequestOptions(params);

    return this.http.head(AppConstants.host + url, options);
  }

  options(url: string, params?: any): Observable<Response> {

    const options: RequestOptions = this.getRequestOptions(params);

    return this.http.options(AppConstants.host + url, options);
  }
}
