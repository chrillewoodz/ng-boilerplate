import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {ClientStorage} from '@services/client-storage.service';

@Injectable()

export class StorageLogger {

  private logger = new BehaviorSubject<any>(null);

  public logger$ = this.logger.asObservable();

  constructor(private cs: ClientStorage) {}

  set(key: string, value: any): void {

    this.cs.setItem(key, value);

    this.get(key);
  }

  get(key: string) {
    this.logger.next({value: this.cs.getItem(key), key: key});
  }

  remove(keys: string[]) {

    for (const key of keys) {

      this.cs.removeItem(key);

      this.logger.next({value: null, key: key});
    }
  }
}
