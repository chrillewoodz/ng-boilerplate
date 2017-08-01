import {ErrorInterceptor} from './error.interceptor';
import {JWTInterceptor} from './jwt.interceptor';

export const INTERCEPTORS_PROVIDERS: any[] = [
  ErrorInterceptor,
  JWTInterceptor
];
