import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {CheckboxModule} from '@components/checkbox/checkbox.module';
import {CheckboxesComponent} from './checkboxes.component';

@NgModule({
  imports: [
    SharedModule,
    CheckboxModule
  ],
  exports: [
    CheckboxesComponent
  ],
  declarations: [
    CheckboxesComponent
  ]
})

export class CheckboxesModule {}
