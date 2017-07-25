import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {Utils} from '@services/utils.service';

@Component({
  selector: 'checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxesComponent), multi: true}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxesComponent implements ControlValueAccessor, OnInit {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() size = 'md';
  @Input() theme = 'primary';
  @Input() float = 'left';
  @Input() uniqueKey = 'id';

  public id: string;
  public model: any[] = [];

  constructor() {}

  propagateChange = (_: any) => {};

  registerOnChange(fn: () => any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  writeValue(value: any) {

    if (value !== undefined && value !== null) {
      this.model = value;
    }
  }

  ngOnInit() {}

  selectOption(option) {

    const i: number = Utils.findObjectIndex(this.model, option, this.uniqueKey);

    if (i === -1) {
      this.model.push(option);
    }
    else {
      this.model.splice(i, 1);
    }

    this.propagateChange(this.model);
  }

  trackByFn(i: number, item) {
    return item[this.uniqueKey];
  }
}
