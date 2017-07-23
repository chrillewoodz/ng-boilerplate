import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[selectAll]'
})

export class SelectAllDirective {
  @Input() items: any[];
  @Input() selected: any[];
  @Input() keyToPush: string;

  constructor() {}

  @HostListener('click')
  selectAll(): void {

    let containsUnchecked = false;

    for (const item of this.items) {

      const i: number = this.selected.indexOf(item[this.keyToPush]);

      if (i === -1) {

        containsUnchecked = true;

        break;
      }
    }

    for (const item of this.items) {

      if (containsUnchecked) {
        item['isChecked'] = true;
      }
      else {
        item['isChecked'] = false;
      }
    };
  }
}
