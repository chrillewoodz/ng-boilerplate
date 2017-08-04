import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  TemplateRef
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {FindObjectIndex, GetUniqueID} from '@shared/utils';
import {IOption} from './shared/option.interface';

@Component({
  selector: 'select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => SelectMultipleComponent),
     multi: true
   }
  ]
})

export class SelectMultipleComponent implements ControlValueAccessor {
  @ContentChild('modelRef', {read: TemplateRef}) modelRef: TemplateRef<any>;
  @ContentChild('optionRef', {read: TemplateRef}) optionRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() optionsLabel = 'name';
  @Input() labelsCap = 2;
  @Input() uniqueKey = 'id';
  @Input() disabled = false;
  @Input() queryPlaceholder = 'Search...';
  @Input() placeholder = '';
  @Input() label = '';
  @Output() queryFn: EventEmitter<any> = new EventEmitter<any>();

  public isOpen = false;
  public selectId: string = GetUniqueID();

  private _model: any[] = [];

  set model(val) {
    this._model = val;
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

  writeValue<T>(value: T[]) {

    if (value !== undefined && value !== null) {
      this.model = value;
      this.cd.markForCheck();
    }
  }

  open(): boolean {

    if (this.disabled) {

      this.isOpen = false;

      return false;
    }

    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

  selectOption<T extends IOption>(option: T): boolean {

    if (this.disabled) {
      return false;
    }

    const existingModelIndex = FindObjectIndex(this.model, option, this.uniqueKey);

    if (existingModelIndex === -1 && option.isChecked) {
      this.addToModel(option);
    }
    else if (!option.isChecked) {
      this.removeFromModel(existingModelIndex);
    }

    this.propagateChange(this.model);
  }

  selectAll(): void {

    let containsUnchecked = false;

    for (const option of this.options) {

      const existingModelIndex = FindObjectIndex(this.model, option, this.uniqueKey);

      if (existingModelIndex === -1) {

        containsUnchecked = true;

        break;
      }
    }

    for (const option of this.options) {

      if (containsUnchecked) {
        option.isChecked = true;
      }
      else {
        option.isChecked = false;
      }
    };

    this.propagateChange(this.model);
  }

  addToModel<O>(option: O): void {
    this.model = [...this.model, ...[option]];
  }

  removeFromModel(i: number): void {
    this.model = this.model.filter((item, index) => i !== index);
  }

  isChecked<T>(option: T): boolean {
    return FindObjectIndex(this.model, option, this.uniqueKey) !== -1;
  }

  trackByFn<T>(index: number, item: T): string|number {
    return item[this.uniqueKey];
  }
}
