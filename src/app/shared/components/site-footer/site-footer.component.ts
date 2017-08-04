import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SiteFooterComponent {

  constructor() {}
}
