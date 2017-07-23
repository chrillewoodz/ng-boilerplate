import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class NotificationsApi {

  public notifications: Subject<any> = new Subject<any>();

  constructor() {}

  newNotification(options: any): void {
    this.notifications.next(options);
  }
}
