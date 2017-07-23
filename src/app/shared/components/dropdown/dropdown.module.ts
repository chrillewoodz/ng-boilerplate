import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {DropdownComponent} from './dropdown.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    DropdownComponent
  ],
  declarations: [
    DropdownComponent
  ]
})

export class DropdownModule {}
