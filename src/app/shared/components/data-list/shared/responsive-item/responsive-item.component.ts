import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'responsive-item',
  templateUrl: './responsive-item.component.html',
  styleUrls: ['./responsive-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ResponsiveItemComponent {
  @Input() categories = [];
  @Input() uniqueKey: string;

  constructor() {}

  trackByFn(i: number, item: any): any {
    return item[this.uniqueKey];
  }
}
