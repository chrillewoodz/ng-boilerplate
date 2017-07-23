import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';

import {ModalCloseDirective} from './shared/directives/modal-close.directive';
import {ModalOpenDirective} from './shared/directives/modal-open.directive';
import {ModalStateDirective} from './shared/directives/modal-state.directive';
import {ModalCloseModule} from './shared/components/modal-close/modal-close.module';
import {ModalComponent} from './modal.component';

@NgModule({
  imports: [
    SharedModule,
    ModalCloseModule
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
