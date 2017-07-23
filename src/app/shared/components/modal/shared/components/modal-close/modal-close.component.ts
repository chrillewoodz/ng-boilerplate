import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ModalApi} from '../../services/modal-api.service';

@Component({
  selector: 'modal-close',
  templateUrl: './modal-close.component.html',
  styleUrls: ['./modal-close.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalCloseComponent {
  @Input() modalId: string;

  constructor(private modalApi: ModalApi) {}

  close() {
    this.modalApi.close(this.modalId);
  }
}
