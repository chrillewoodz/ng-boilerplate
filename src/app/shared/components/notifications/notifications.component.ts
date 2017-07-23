import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input} from '@angular/core';

import {NotificationsApi} from './shared/notifications-api.service';

@Component({
  moduleId: module.id,
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NotificationsComponent implements OnInit {
  @Input() hideAfter = 3000;

  public isActive: boolean;
  public notification: any;

  constructor(private cd: ChangeDetectorRef, private notificationsApi: NotificationsApi) {}

  ngOnInit() {

    this.notificationsApi.notifications.subscribe((options: any) => {

      this.notification = options;
      this.isActive = true;

      setTimeout(() => {
        this.isActive = false;
        this.cd.markForCheck();
      }, this.hideAfter);

      this.cd.markForCheck();
    });
  }
}
