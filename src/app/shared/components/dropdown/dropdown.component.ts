import {ChangeDetectorRef, ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef} from '@angular/core';

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

  constructor(private changeDetector: ChangeDetectorRef) {}

  /* Toggles the dropdown
   *
   * @returns {Boolean} [false if the dropdown is disabled]
   */
  toggle(): boolean {

    if (this.disabled) {

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

    this.changeDetector.markForCheck();
  }

  run(option: any): void {

    if (option.clickHandler && typeof option.clickHandler === 'function') {
      option.clickHandler({emitted: this.dataToEmit, option: option});
    }
  }

  trackByFn(i: number, item) {
    return item[this.uniqueKey];
  }
}
