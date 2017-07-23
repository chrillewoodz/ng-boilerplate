import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class SiteHeaderApi {

  constructor() {}

  private states = new Subject<any>();

  states$ = this.states.asObservable();

  trigger(id: string): void {
    this.states.next({id: id});
  }
}
