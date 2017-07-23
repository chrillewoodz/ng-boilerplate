import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {DropdownSelectComponent} from './dropdown-select.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    DropdownSelectComponent
  ],
  declarations: [
    DropdownSelectComponent
  ]
})

export class DropdownSelectModule {}
