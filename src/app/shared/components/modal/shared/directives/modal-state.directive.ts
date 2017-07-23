import {Directive, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {ModalApi} from '../services/modal-api.service';

@Directive({
  selector: '[modalState]'
})

export class ModalStateDirective implements OnDestroy, OnInit {

  constructor(private modalApi: ModalApi) {}

  private statesSubscription: Subscription;

  @HostBinding('class.modal-open')
  isOpen: boolean;

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
