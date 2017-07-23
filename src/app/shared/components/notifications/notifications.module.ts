import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {NotificationsComponent} from './notifications.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    NotificationsComponent
  ],
  declarations: [
    NotificationsComponent
  ]
})

export class NotificationsModule {}
