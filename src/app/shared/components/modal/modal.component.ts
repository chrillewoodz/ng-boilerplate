import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import {NavigationStart, Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import {ModalApi} from './shared/modal-api.service';
import {IModal} from './shared/modal.interface';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('overlay') overlay: ElementRef;
  @Input() modalId: string;
  @Input() size = 'sm';
  @Input() position = 'top';
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  public isOpen = false;
  public currentTemplate: string;

  private statesSubscription: Subscription;

  @HostListener('document:click', ['$event'])
  documentClick(e: MouseEvent) {

    // If the clicked element is the modal overlay, close the modal
    if (this.overlay.nativeElement === e.target) {
      this.modalApi.close(this.modalId);
    }
  }

  constructor(
    private cd: ChangeDetectorRef,
    private modalApi: ModalApi,
    private router: Router
  ) {}

  ngOnInit() {

    this.statesSubscription = this.modalApi.states$.subscribe(
      (modal: IModal) => {

        if (modal.id === this.modalId) {

          if (modal.action === 'open') {
            this.isOpen = true;
          }
          else {
            this.isOpen = false;
            this.closed.emit(this.modalId);
          }

          this.currentTemplate = modal.template;

          this.cd.markForCheck();
        }
      }
    );

    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(() => {
        this.modalApi.close(this.modalId);
      }
    );
  }

  ngOnDestroy() {
    this.statesSubscription.unsubscribe();
  }
}
