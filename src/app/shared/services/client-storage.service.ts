import {Injectable} from '@angular/core';

import {Cookies} from '@services/cookies.service';

@Injectable()

export class ClientStorage {

  constructor(private cookies: Cookies) {}

  getItem(k: string): any {

    try {
      return JSON.parse(localStorage.getItem(k));
    }
    catch (err) {
      return JSON.parse(this.cookies.getItem(k));
    }
  }

  setItem(k: string, v: any): void {

    try {
      localStorage.setItem(k, JSON.stringify(v));
    }
    catch (err) {
      this.cookies.setItem(k, JSON.stringify(v));
    }
  }

  removeItem(k): void {

    try {
      localStorage.removeItem(k);
    }
    catch (err) {
      this.cookies.removeItem(k);
    }
  }
}
