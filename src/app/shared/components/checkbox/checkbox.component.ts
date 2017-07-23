import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {Utils} from '@services/utils.service';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() disabled = false;
  @Input() size = 'md';
  @Input() theme = 'primary';
  @Input() float = 'left';
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();

  private _model: boolean;

  public id: string;

  public propagateChange = (_: any) => {};

  constructor(private cd: ChangeDetectorRef) {}

  set model(val) {
    this._model = val;
    this.propagateChange(this._model);
  }

  get model() {
    return this._model;
  }

  registerOnChange(fn: () => any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  writeValue(value: any) {

    if (value !== undefined) {
      this.model = value;
      this.cd.markForCheck();
    }
  }

  ngOnInit() {
    this.id = Utils.getUniqueID();
  }
}
