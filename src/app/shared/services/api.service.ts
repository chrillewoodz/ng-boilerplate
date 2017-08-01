import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CustomResponse} from '@interfaces/custom-response.interface';
import {HttpWrapper} from '@services/http-wrapper.service';

@Injectable()

export class Api {

  constructor(private http: HttpWrapper) {}

  get(url: string, params?: {[key: string]: any}): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(url, params);
  }

  post(url: string, data: any, params?: {[key: string]: any}): Observable<CustomResponse> {
    return this.http.post<CustomResponse>(url, data, params);
  }

  put(url: string, data: any, params?: {[key: string]: any}): Observable<CustomResponse> {
    return this.http.put<CustomResponse>(url, data, params);
  }

  delete(url: string, params?: {[key: string]: any}): Observable<CustomResponse> {
    return this.http.delete<CustomResponse>(url, params);
  }

  patch(url: string, data: any, params?: {[key: string]: any}): Observable<CustomResponse> {
    return this.http.patch<CustomResponse>(url, data, params);
  }

  head(url: string, params?: {[key: string]: any}): Observable<CustomResponse> {
    return this.http.head<CustomResponse>(url, params);
  }

  options(url: string, params?: {[key: string]: any}): Observable<CustomResponse> {
    return this.http.options<CustomResponse>(url, params);
  }
}
