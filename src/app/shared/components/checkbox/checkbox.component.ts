import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {GetUniqueID} from '@shared/utils';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true}
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() size = 'md';
  @Input() float = 'left';

  public id: string = GetUniqueID();
  public checked: boolean;

  constructor(private cd: ChangeDetectorRef) {}

  propagateChange = (_: any) => {};
  propagateTouched = () => {};

  registerOnChange(fn: (_: any) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.propagateTouched = fn;
  }

  writeValue(value) {
    this.checked = value;
    this.cd.markForCheck();
  }
}
