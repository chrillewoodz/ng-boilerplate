import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataListComponent {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() total: number;
  @Input() limit: number;
  @Input() uniqueKey = 'id';
  @Input() noResultsText = 'No results available';
  @Input() isPaginationAvailable = true;

  @Input() set items(items) {
    this._items = items;
  }

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();

  get items() {
    return this._items;
  }

  private _items: any[] = [];

  constructor() {}

  trackByFn<T>(i: number, item: T): string|number {
    return item[this.uniqueKey];
  }
}
