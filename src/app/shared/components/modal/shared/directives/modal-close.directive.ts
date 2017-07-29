import {Directive, HostListener, Input} from '@angular/core';

import {ModalApi} from '../modal-api.service';

@Directive({
  selector: '[modalClose]'
})

export class ModalCloseDirective {
  @Input() modalId: string;

  constructor(private modalApi: ModalApi) {}

  @HostListener('click')
  close(): void {
    this.modalApi.close(this.modalId);
  }
}
