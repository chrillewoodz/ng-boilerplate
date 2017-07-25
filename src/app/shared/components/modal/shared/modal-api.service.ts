import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class ModalApi {

  private states = new BehaviorSubject<any>(true);

  public states$ = this.states.asObservable();

  constructor() {}

  open(id: string, template?: string): Promise<any> {

    this.states.next({isOpen: true, id: id, template: template});

    return new Promise((resolve, reject) => {
      resolve({id: id, template: template});
    });
  }

  close(id: string): Promise<any> {

    this.states.next({isOpen: false, id: id});

    return new Promise((resolve, reject) => {
      resolve({id: id});
    });
  }
}
