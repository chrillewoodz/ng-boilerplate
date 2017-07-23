import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {SearchInputComponent} from './search-input.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SearchInputComponent
  ],
  declarations: [
    SearchInputComponent
  ]
})

export class SearchInputModule {}
