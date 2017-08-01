import {
  AfterContentInit,
  ContentChildren,
  Directive,
  HostListener,
  Input,
  Output,
  OnInit,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Renderer,
  QueryList
} from '@angular/core';

import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

@Directive({
  selector: '[clickOutside]'
})

export class ClickOutsideDirective {
  @Input() exceptions: QueryList<HTMLElement>;
  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event'])
  documentClick(e: MouseEvent) {

    e.stopPropagation();

    if (!this.exceptions) {

      // If host element or any of its children isn't clicked while there are no exceptions defined, run the callback
      if (!this.isHostClicked(e)) {
        this.clickOutside.emit();
      }

      return;
    }
    else {

      if (this.isExceptionClicked(e)) {
        return;
      }
      else {

        if (!this.isHostClicked(e)) {
          this.clickOutside.emit();
        }
      }
    }
  }

  constructor(private elementRef: ElementRef) {}

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
