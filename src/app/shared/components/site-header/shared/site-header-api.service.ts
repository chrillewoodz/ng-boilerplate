import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class SiteHeaderApi {

  private states = new Subject<any>();

  public states$ = this.states.asObservable();

  constructor() {}

  trigger(id: string): void {
    this.states.next({id: id});
  }
}
