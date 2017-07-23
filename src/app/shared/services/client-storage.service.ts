import {Injectable} from '@angular/core';

import {Cookies} from '@services/cookies.service';

@Injectable()

export class ClientStorage {

  public static get(k: string): any {

    try {
      return JSON.parse(localStorage.getItem(k));
    }
    catch (err) {
      return JSON.parse(Cookies.getItem(k));
    }
  }

  public static set(k: string, v: any): void {

    try {
      localStorage.setItem(k, JSON.stringify(v));
    }
    catch (err) {
      Cookies.setItem(k, JSON.stringify(v));
    }
  }

  public static remove(k): void {

    try {
      localStorage.removeItem(k);
    }
    catch (err) {
      Cookies.removeItem(k);
    }
  }
}
