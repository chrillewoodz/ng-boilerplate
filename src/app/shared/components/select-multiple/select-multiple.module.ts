import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {CheckboxModule} from '@components/checkbox/checkbox.module';
import {SearchInputModule} from '@components/search-input/search-input.module';
import {SelectMultipleComponent} from './select-multiple.component';

@NgModule({
  imports: [
    SharedModule,
    CheckboxModule,
    SearchInputModule
  ],
  exports: [
    SelectMultipleComponent
  ],
  declarations: [
    SelectMultipleComponent
  ]
})

export class SelectMultipleModule {}
