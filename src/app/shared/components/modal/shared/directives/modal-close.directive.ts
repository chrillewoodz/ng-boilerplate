import {Directive, HostListener, Input} from '@angular/core';

import {ModalApi} from '../modal-api.service';

@Directive({
  selector: '[modalClose]'
})

export class ModalCloseDirective {

  public modalClose: string;

  constructor(private modalApi: ModalApi) {}

  @HostListener('click')
  close(): void {
    this.modalApi.close(this.modalClose);
  }
}
