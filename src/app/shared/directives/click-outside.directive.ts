import {AfterContentInit, ContentChildren, Directive, Input, Output, OnInit, ElementRef, EventEmitter, Renderer, OnDestroy, QueryList} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

@Directive({
  selector: '[outsideClick]'
})

export class ClickOutsideDirective implements AfterContentInit, OnDestroy, OnInit {
  @Input() exceptions: QueryList<HTMLElement>;
  @Output() outsideClick: EventEmitter<any> = new EventEmitter();

  documentSubject = new Subject();
  documentSubscription: Subscription;
  documentClickHandler: any;
  documentTouchHandler: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  ngAfterContentInit() {

    this.documentClickHandler = this.renderer.listenGlobal('document', 'click', (e: MouseEvent) => {
      this.documentSubject.next(e);
    });

    this.documentTouchHandler = this.renderer.listenGlobal('document', 'touchend', (e: MouseEvent) => {
      this.documentSubject.next(e);
    });

    this.documentSubscription = this.documentSubject.debounceTime(100).subscribe(
      (e: MouseEvent) => {

        e.stopPropagation();

        if (!this.exceptions) {

          // If host element or any of its children isn't clicked while there are no exceptions defined, run the callback
          if (!this.isHostClicked(e)) {
            this.outsideClick.emit();
          }

          return false;
        }
        else {

          if (this.isExceptionClicked(e)) {
            return false;
          }
          else {

            if (!this.isHostClicked(e)) {
              this.outsideClick.emit();
            }
          }
        }
      }
    );
  }

  ngOnInit() {


  }

  ngOnDestroy() {
    this.documentClickHandler();
    this.documentTouchHandler();
    this.documentSubscription.unsubscribe();
  }

  isHostClicked(e: MouseEvent): boolean {

    if (this.elementRef.nativeElement === e.target || this.elementRef.nativeElement.contains(e.target)) {
      return true;
    }
  }

  isExceptionClicked(e: MouseEvent): boolean {

    return this.exceptions.some((exception: any) => {

      if (e.target === exception || exception.contains(e.target)) {
        return true;
      }
    });
  }
}
