import {ChangeDetectorRef, ChangeDetectionStrategy, Component, ContentChild, forwardRef, Input, TemplateRef} from '@angular/core';
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
  @Input() options: any[];
  @Input() optionsLabel = 'label';
  @Input() uniqueKey = 'id';
  @Input() placeholder = '';
  @Input() isDisabled: boolean;
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

  /* Toggles the dropdown
   *
   * @returns {Boolean} [false if the dropdown is disabled]
   */
  toggle(): boolean {

    if (this.isDisabled) {

      this.isOpen = false;

      return false;
    }

    this.isOpen = !this.isOpen;
  }

  /* Closes the dropdown
   *
   * @returns {Void}
   */
  close(): void {

    this.isOpen = false;

    this.cd.markForCheck();
  }

  select(option: any): void {

    this.model = option;

    this.propagateChange(this.model);

    this.close();
  }
}
