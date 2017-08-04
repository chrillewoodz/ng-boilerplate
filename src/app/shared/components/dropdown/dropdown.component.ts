import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef
} from '@angular/core';

import {IOption} from './shared/option.interface';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DropdownComponent {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() options: any[] = [];
  @Input() dataToEmit = null;
  @Input() disabled = false;
  @Input() uniqueKey = 'id';
  @Input() isToggleIconVisible = true;

  public isOpen = false;

  constructor(private cd: ChangeDetectorRef) {}

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

  run<O extends IOption>(option: O): void {

    if (option.clickHandler && typeof option.clickHandler === 'function') {
      option.clickHandler({emitted: this.dataToEmit, option: option});
    }
  }

  trackByFn<T>(i: number, item: T): string|number {
    return item[this.uniqueKey];
  }
}
