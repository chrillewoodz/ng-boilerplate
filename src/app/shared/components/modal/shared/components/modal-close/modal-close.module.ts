import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {ModalCloseComponent} from './modal-close.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ModalCloseComponent
  ],
  declarations: [
    ModalCloseComponent
  ]
})

export class ModalCloseModule {}
