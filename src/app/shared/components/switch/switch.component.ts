import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {GetUniqueID} from '@shared/utils';
import {CustomValidators} from '@validators/custom-validators';

@Component({
  moduleId: module.id,
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SwitchComponent), multi: true}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SwitchComponent implements ControlValueAccessor {
  @Input() disabled = false;

  public id: string = GetUniqueID();
  public checked: boolean;

  constructor() {}

  propagateChange: any = (_: any) => {};
  propagateTouched: any = () => {};

  registerOnChange(fn: (_: any) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.propagateTouched = fn;
  }

  writeValue(value: boolean) {
    this.checked = value;
  }
}
