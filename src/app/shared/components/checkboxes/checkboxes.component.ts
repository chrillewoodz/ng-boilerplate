import {ChangeDetectionStrategy, Component, ContentChild, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef} from '@angular/core';
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
  @Input() options: any[] = []
  @Input() size: string = 'md';
  @Input() theme: string = 'primary';
  @Input() float: string = 'left';
  @Input() uniqueKey: string = '_id';
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();

  public id: string;

  public propagateChange = (_: any) => {};

  public model: any[] = [];

  constructor() {}

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

  selectOption(option: any) {

    const i: number = Utils.findObjectIndex(this.model, option, this.uniqueKey);

    if (i === -1) {
      this.model.push(option);
    }
    else {
      this.model.splice(i, 1);
    }

    this.propagateChange(this.model);
  }
}
