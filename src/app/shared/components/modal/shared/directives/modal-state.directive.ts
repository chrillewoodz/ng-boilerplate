import {Directive, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {ModalApi} from '../modal-api.service';

@Directive({
  selector: '[modalState]'
})

export class ModalStateDirective implements OnDestroy, OnInit {

  @HostBinding('class.modal-open')
  isOpen: boolean;

  private statesSubscription: Subscription;

  constructor(private modalApi: ModalApi) {}

  ngOnInit() {

    this.statesSubscription = this.modalApi.states$.subscribe(
      (modal: any) => {
        this.isOpen = modal.isOpen;
      }
    );
  }

  ngOnDestroy() {
    this.statesSubscription.unsubscribe();
  }
}
