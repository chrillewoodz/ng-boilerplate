import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  HostListener,
  Input,
  TemplateRef
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {SelectUtils} from './shared/select-utils.service';
import {GetUniqueID} from '@shared/utils';

@Component({
  selector: 'custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => SelectComponent),
     multi: true
   }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SelectComponent implements ControlValueAccessor {
  @ContentChild(TemplateRef) optionRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() customModel: any;
  @Input() uniqueKey = 'id';
  @Input() disabled = false;
  @Input() optionsLabel = 'label';
  @Input() placeholder = '';
  @Input() label = '';

  public selectId: string = GetUniqueID();
  public isOpen = false;
  public isDirty: boolean;

  private _model: any;
  private _currentModel: string;
  private keys: number[] = [38, 40];

  set model(val) {
    this._model = val;
    this.currentModel = this.customModel || (val ? val[this.optionsLabel] : '');
  }

  get model() {
    return this._model;
  }

  set currentModel(val) {
    this._currentModel = val;
  }

  get currentModel() {
    return this._currentModel;
  }

  @HostListener('document:keydown', ['$event'])
  keyDown(e: KeyboardEvent) {

    if (this.isOpen && this.keys.indexOf(e.keyCode || e.which) !== -1) {

      e.preventDefault();

      return false;
    }
  }

  @HostListener('document:keyup', ['$event'])
  keyUp(e: KeyboardEvent) {

    if (this.isOpen && this.keys.indexOf(e.keyCode || e.which) !== -1) {

      this.options = SelectUtils.getMarkedList({
        list: this.options,
        current: this.model,
        direction: (e.keyCode || e.which) === 38 ? 'up' : 'down',
        uniqueKey: this.uniqueKey
      });
    }
    else if (this.isOpen && (e.keyCode || e.which) === 13) {

      const currentlyMarked = SelectUtils.getCurrentlyMarked(this.options);

      if (currentlyMarked) {

        this.model = currentlyMarked;

        SelectUtils.resetMarkedList(this.options);

        this.close();
      }
    }

    // Notifying angular about the changes to the options,
    // this is crucial as the view won't be updated without it
    this.cd.markForCheck();
  };

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

    SelectUtils.resetMarkedList(this.options);
  }

  selectOption<O>(option: O): boolean {

    if (this.disabled) {
      return false;
    }

    this.model = option;
    this.isDirty = true;
    this.close();

    this.propagateChange(this.model);
  }

  isSelected<O>(option: O): boolean {

    if (this.model) {
      return option[this.uniqueKey] === this.model[this.uniqueKey];
    }
    else {
      return false;
    }
  }

  clearModel(): void {
    this.model = null;
    this.propagateChange(this.model);
  }
}
