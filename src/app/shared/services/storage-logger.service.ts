import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {ClientStorage} from '@services/client-storage.service';

@Injectable()

export class StorageLogger {

  private logger = new BehaviorSubject<any>(null);

  public logger$ = this.logger.asObservable();

  set(key: string, value: any): void {

    ClientStorage.set(key, value);

    this.get(key);
  }

  get(key: string) {
    this.logger.next({value: ClientStorage.get(key), key: key});
  }

  remove(keys: string[]) {

    for (const key of keys) {

      ClientStorage.remove(key);

      this.logger.next({value: null, key: key});
    }
  }
}
