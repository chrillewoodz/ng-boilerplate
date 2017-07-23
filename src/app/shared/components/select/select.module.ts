import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {SelectComponent} from './select.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SelectComponent
  ],
  declarations: [
    SelectComponent
  ]
})

export class SelectModule {}
