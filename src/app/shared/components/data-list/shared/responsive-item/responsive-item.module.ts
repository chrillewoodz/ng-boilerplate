import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {ResponsiveItemComponent} from './responsive-item.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ResponsiveItemComponent
  ],
  declarations: [
    ResponsiveItemComponent
  ]
})

export class ResponsiveItemModule {}
