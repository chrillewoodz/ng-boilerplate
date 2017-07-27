import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

// Custom
import {Utils} from '@services/utils.service';
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

  public checked: boolean;

  public id: string = Utils.getUniqueID();

  constructor() {}

  propagateChange: any = () => {};

  writeValue(value) {
    this.checked = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
