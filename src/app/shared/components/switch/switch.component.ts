// Angular
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  ViewChild
} from '@angular/core';

import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

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
  @Input() disabled: boolean;

  private _model: boolean;

  public id: string = Utils.getUniqueID();

  constructor() {}

  get model() {
    return this._model;
  }

  set model(val) {
    this._model = val;
    this.propagateChange(val);
  }

  propagateChange: any = () => {};

  validateFn: any = () => {};

  writeValue(value) {

    if (value) {
      this.model = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}