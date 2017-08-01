import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

import {AppConstants} from '@constants/app-constants.constant';
import {ClientStorage} from '@services/client-storage.service';

@Injectable()

/* Wrapper for Angular's HttpClient class, let's us provide headers and other things on every request */
export class HttpWrapper implements OnDestroy {

  constructor(
    private cs: ClientStorage,
    private http: HttpClient
  ) {}

  ngOnDestroy() {}

  convertJSONtoParams(json: any): HttpParams {

    let params: HttpParams = new HttpParams();

    for (const key in json) {

      if (json.hasOwnProperty(key) && (json[key] || json[key] === false || json[key] === 0)) {

        if (json[key].constructor === Array && !json[key].length) {
          continue;
        }
        else {
          params = params.append(key, String(json[key]));
        }
      }
    }

    return params;
  }

  getRequestOptions(params?: any): any {

    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');

    return {
      headers: headers,
      params: params ? this.convertJSONtoParams(params) : null
    };
  }

  get<T>(url: string, params?: {[key: string]: any}): Observable<HttpEvent<T>> {
    return this.http.get<T>(AppConstants.host + url, this.getRequestOptions(params));
  }

  post<T>(url: string, data: any, params?: {[key: string]: any}): Observable<HttpEvent<T>> {
    return this.http.post<T>(AppConstants.host + url, data, this.getRequestOptions(params));
  }

  put<T>(url: string, data: any, params?: {[key: string]: any}): Observable<HttpEvent<T>> {
    return this.http.put<T>(AppConstants.host + url, data, this.getRequestOptions(params));
  }

  delete<T>(url: string, params?: {[key: string]: any}): Observable<HttpEvent<T>> {
    return this.http.delete<T>(AppConstants.host + url, this.getRequestOptions(params));
  }

  patch<T>(url: string, data: any, params?: {[key: string]: any}): Observable<HttpEvent<T>>{
    return this.http.patch<T>(AppConstants.host + url, data, this.getRequestOptions(params));
  }

  head<T>(url: string, params?: {[key: string]: any}): Observable<HttpEvent<T>> {
    return this.http.head<T>(AppConstants.host + url, this.getRequestOptions(params));
  }

  options<T>(url: string, params?: {[key: string]: any}): Observable<HttpEvent<T>> {
    return this.http.options<T>(AppConstants.host + url, this.getRequestOptions(params));
  }
}
