import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  Input,
  TemplateRef
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {FindObjectIndex} from '@shared/utils';
import {IOption} from './shared/option.interface';

@Component({
  selector: 'checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxesComponent), multi: true}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxesComponent implements ControlValueAccessor {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() size = 'md';
  @Input() theme = 'primary';
  @Input() float = 'left';
  @Input() uniqueKey = 'id';

  public id: string;
  public model: any[] = [];

  constructor() {}

  propagateChange = (_: any) => {};
  propagateTouched = () => {};

  registerOnChange(fn: (_: any) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.propagateTouched = fn;
  }

  writeValue<T>(value: T[]) {

    if (value !== undefined && value !== null) {
      this.model = value;
    }
  }

  selectOption<O extends IOption>(option: O): void {

    const i: number = FindObjectIndex(this.model, option, this.uniqueKey);

    if (i === -1 && option.isChecked) {
      this.model.push(option);
    }
    else {
      this.model.splice(i, 1);
    }

    this.propagateChange(this.model);
  }

  trackByFn<T>(i: number, item: T): string|number {
    return item[this.uniqueKey];
  }
}
