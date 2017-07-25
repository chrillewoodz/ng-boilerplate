import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {SelectUtils} from './shared/select-utils.service';
import {Utils} from '@services/utils.service';

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

export class SelectComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @ContentChild('modelRef', {read: TemplateRef}) modelRef: TemplateRef<any>;
  @ContentChild('optionRef', {read: TemplateRef}) optionRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() uniqueKey = 'id';
  @Input() disabled = false;
  @Input() optionsLabel = 'label';
  @Input() placeholder = '';
  @Input() label = '';

  public selectId: string = Utils.getUniqueID();
  public isOpen = false;
  public isDirty: boolean;

  // Event handlers
  private documentKeyDownHandler: any;
  private documentKeyUpHandler: any;

  private _model: any;

  set model(val) {
    this._model = val;
  }

  get model() {
    return this._model;
  }

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

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

  ngOnInit() {

    const keys = [38, 40];

    // Prevents the window from scrolling when we scroll inside the select
    this.documentKeyDownHandler = this.renderer.listen('document', 'keydown', (e: any) => {

      if (this.isOpen && keys.indexOf(e.keyCode || e.which) !== -1) {

        e.preventDefault();

        return false;
      }
    });

    this.documentKeyUpHandler = this.renderer.listen('document', 'keyup', (e: any) => {

      if (this.isOpen && keys.indexOf(e.keyCode || e.which) !== -1) {

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

      // Notifying angular about the changes to the options, this is crucial as the view won't be updated without it
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.documentKeyDownHandler();
    this.documentKeyUpHandler();
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

  selectOption(option: any): boolean {

    if (this.disabled) {
      return false;
    }

    this.model = option;
    this.isDirty = true;
    this.close();

    this.propagateChange(this.model);
  }

  isSelected(option: any): boolean {

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
