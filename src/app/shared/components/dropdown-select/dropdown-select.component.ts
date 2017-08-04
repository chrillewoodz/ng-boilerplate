import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  Input,
  TemplateRef
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
  providers: [
    {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => DropdownSelectComponent),
     multi: true
   }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DropdownSelectComponent implements ControlValueAccessor {
  @ContentChild('modelRef') modelRef: TemplateRef<any>;
  @ContentChild('optionRef') optionRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() uniqueKey = 'id';
  @Input() disabled = false;
  @Input() isToggleIconVisible = true;

  public isOpen = false;

  private _model: any;

  set model(model) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

  constructor(private cd: ChangeDetectorRef) {}

  propagateChange = (_: any) => {};
  propagateTouched = () => {};

  registerOnChange(fn: (_: any) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.propagateTouched = fn;
  }

  writeValue<T>(value: T) {

    if (value !== undefined) {
      this.model = value;
      this.cd.markForCheck();
    }
  }

  toggle(): boolean {

    if (this.disabled) {

      this.isOpen = false;

      return false;
    }

    this.isOpen = !this.isOpen;
  }

  close(): void {

    this.isOpen = false;

    this.cd.markForCheck();
  }

  select<O>(option: O): void {

    this.model = option;

    this.propagateChange(this.model);

    this.close();
  }

  trackByFn<T>(i: number, item: T): string|number {
    return item[this.uniqueKey];
  }
}
