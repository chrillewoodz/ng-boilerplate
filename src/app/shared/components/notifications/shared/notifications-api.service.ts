import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {INotification} from './notification.interface';

@Injectable()

export class NotificationsApi {

  public notifications: Subject<any> = new Subject<any>();

  constructor() {}

  newNotification(options: INotification): void {
    this.notifications.next(options);
  }
}
