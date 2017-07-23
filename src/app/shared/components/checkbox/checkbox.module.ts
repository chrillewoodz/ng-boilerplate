import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {CheckboxComponent} from './checkbox.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CheckboxComponent
  ],
  declarations: [
    CheckboxComponent
  ]
})

export class CheckboxModule {}
