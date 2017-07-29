import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

class IModalParams {
  isOpen?: boolean;
  id: string;
  template?: string;
  action: string;
}

@Injectable()

export class ModalApi {

  private states = new BehaviorSubject<IModalParams>(null);

  public states$ = this.states.asObservable();

  constructor() {}

  open(id: string, template?: string): void {

    const args: IModalParams = {
      isOpen: true,
      id: id,
      template: template,
      action: 'open'
    };

    this.states.next(args);
  }

  close(id: string): void {

    const args: IModalParams = {
      isOpen: false,
      id: id,
      action: 'close'
    };

    this.states.next(args);
  }
}
