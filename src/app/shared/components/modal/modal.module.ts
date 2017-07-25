import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';

import {ModalCloseDirective} from './shared/directives/modal-close.directive';
import {ModalOpenDirective} from './shared/directives/modal-open.directive';
import {ModalStateDirective} from './shared/directives/modal-state.directive';
import {ModalComponent} from './modal.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ModalCloseDirective,
    ModalOpenDirective,
    ModalStateDirective,
    ModalComponent
  ],
  declarations: [
    ModalCloseDirective,
    ModalOpenDirective,
    ModalStateDirective,
    ModalComponent
  ]
})

export class ModalModule {}
