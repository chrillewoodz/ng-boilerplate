import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class ModalApi {

  constructor() {}

  private states = new BehaviorSubject<any>(true);

  states$ = this.states.asObservable();

  open(id: string, template?: string): Promise<any> {
    this.states.next({isOpen: true, id: id, template: template});

    return new Promise((resolve, reject) => {
      resolve({id: id, template: template});
    });
  }

  close(id: string): void {
    this.states.next({isOpen: false, id: id});
  }
}
