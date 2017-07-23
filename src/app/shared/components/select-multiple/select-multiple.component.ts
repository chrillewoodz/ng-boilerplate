import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, Input, Output, TemplateRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {Utils} from '@services/utils.service';

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
  @ContentChild('modelTemplate', {read: TemplateRef}) modelTemplateRef: TemplateRef<any>;
  @ContentChild('optionTemplate', {read: TemplateRef}) optionTemplateRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() optionsLabel = 'name';
  @Input() labelsCap = 2;
  @Input() uniqueKey = '_id';
  @Input() disabled = false;
  @Input() required = false;
  @Input() theme = 'primary';
  @Input() queryPlaceholder = 'Search...';
  @Input() placeholder = '';
  @Input() label = '';
  @Output() queryFn: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cd: ChangeDetectorRef) {}

  set model(val) {
    this._model = val;
  }

  get model() {
    return this._model;
  }

  public isOpen: boolean = false;
  public selectId: string = Utils.getUniqueID();

  private _model: any[] = [];

  public propagateChange = (_: any) => {};

  registerOnChange(fn: () => any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  writeValue(value: any) {

    if (value !== undefined && value !== null) {
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
  }

  selectOption(option: any): boolean {

    if (this.disabled) {
      return false;
    }

    const existingModelIndex = Utils.findObjectIndex(this.model, option, this.uniqueKey);

		if (existingModelIndex === -1) {
      this.addToModel(option);
		}
		else {
			this.removeFromModel(existingModelIndex);
		}

    this.propagateChange(this.model);
  }

  selectAll(): void {

    let containsUnchecked = false;

    for (const option of this.options) {

      const existingModelIndex = Utils.findObjectIndex(this.model, option, this.uniqueKey);

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

  addToModel(option: any): void {
    this.model = [...this.model, ...option];
  }

  removeFromModel(i: number): void {
    this.model = this.model.filter((item, index) => i !== index);
  }

  isChecked(option: any): boolean {
    return Utils.findObjectIndex(this.model, option, this.uniqueKey) !== -1;
  }

  trackByFn(index, item) {
    return item[this.uniqueKey];
  }
}
