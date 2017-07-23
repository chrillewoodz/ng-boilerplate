import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';

import {SiteFooterComponent} from './site-footer.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SiteFooterComponent
  ],
  declarations: [
    SiteFooterComponent
  ]
})

export class SiteFooterModule {}
