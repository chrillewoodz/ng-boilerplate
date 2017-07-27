import {ContentChild, Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

import {CheckboxComponent} from '@components/checkbox/checkbox.component';

@Directive({
  selector: '[selectItem]'
})

export class SelectItemDirective {
  @ContentChild(CheckboxComponent) host: CheckboxComponent;
  @Input() item: any;
  @Input() selected: any[];
  @Input() keyToPush: string;

  constructor() {}

  @HostListener('ngModelChange')
  modelChange(): void {

    const i: number = this.selected.indexOf(this.item[this.keyToPush]);

    if (i === -1 && this.host.checked) {
      this.selected.push(this.item[this.keyToPush]);
    }
    else {
      this.selected.splice(i, 1);
    }
  }
}
