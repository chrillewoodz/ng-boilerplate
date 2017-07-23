import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {SwitchComponent} from './switch.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [SwitchComponent],
  declarations: [SwitchComponent]
})

export class SwitchModule {}
