import {Directive, HostListener, Input} from '@angular/core';

import {ModalApi} from '../modal-api.service';

@Directive({
  selector: '[modalOpen]'
})

export class ModalOpenDirective {
  @Input() modalId: string;
  @Input() modalTemplate: string;

  public modalOpen: string;

  constructor(private modalApi: ModalApi) {}

  @HostListener('click')
  open(): void {
    this.modalApi.open(this.modalId, this.modalTemplate);
  }
}
