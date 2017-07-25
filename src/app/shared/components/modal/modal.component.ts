import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';

import {NavigationStart, Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

import {ModalApi} from '@components/modal/shared/services/modal-api.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/* Creates a modal component consisting of an overlay and a content box.
 *
 * Example usages:
 *
 * <modal modalId="settings" position="center" size="fluid">
 *  <h1>Hello world</h1>
 * </modal>
 *
 * <!-- To toggle the modal -->
 * <button modalOpen modalId="settings">Open modal</button>
 *
 * <modal #modal modalId="settings" position="center" size="fluid">
 *  <div *ngIf="modal.currentTemplate === 'world'">
 *    <h1>Hello world</h1>
 *  </div>
 *  <div *ngIf="modal.currentTemplate === 'universe'">
 *    <h1>Hello world</h1>
 *  </div>
 * </modal>
 *
 * <!-- To toggle modal with "Hello world" message -->
 * <button modalOpen modalId="settings" modalTemplate="world">Open modal</button>
 *
 * <!-- To toggle modal with "Hello universe" message -->
 * <button modalOpen modalId="settings" modalTemplate="universe">Open modal</button>
 *
 * <!-- To close modal -->
 * <button modalClose modalId="settings">Close modal</button>
 *
 * <!-- To close modal with component (gives a visual X to click on) -->
 * <modal-close modalId="settings"></modal-close>
 *
 * Available inputs:
 * @param {String} modalId [a unique modal id used to identify the correct modal instance]
 * @param {String} size [the size of the content box, can be fluid|full|xs|sm|md|lg|xl]
 * @param {String} position [the position of the content box, can be center|left|right|top|bottom]
 */
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('overlay') overlay: ElementRef;
  @Input() modalId: string;
  @Input() size = 'sm';
  @Input() position = 'top';
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  public isOpen = false;
  public currentTemplate: string;

  private statesSubscription: Subscription;
  private documentSubject = new Subject();
  private documentSubscription: Subscription;
  private documentClickHandler: any;
  private documentTouchHandler: any;

  constructor(
    private cd: ChangeDetectorRef,
    private modalApi: ModalApi,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {

    this.statesSubscription = this.modalApi.states$.subscribe(
      (modal: any) => {
        this.isOpen = modal.id === this.modalId ? modal.isOpen : false;
        this.currentTemplate = modal.template;
        this.cd.markForCheck();

        if (!this.isOpen && modal.id === this.modalId) {
          this.closed.emit(this.modalId);
        }
      }
    );

    this.documentClickHandler = this.renderer.listen('document', 'click', (e: any) => {
      this.documentSubject.next(e);
    });

    this.documentTouchHandler = this.renderer.listen('document', 'touchend', (e: any) => {
      this.documentSubject.next(e);
    });

    this.documentSubscription = this.documentSubject.debounceTime(100).subscribe(
      (e: MouseEvent) => {

        // If the clicked element is the modal overlay, close the modal
        if (this.overlay.nativeElement === e.target) {
        this.modalApi.close(this.modalId);
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
    this.documentClickHandler();
    this.documentTouchHandler();
    this.documentSubscription.unsubscribe();
  }
}
