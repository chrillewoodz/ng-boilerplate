import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';

import {SiteHeaderComponent} from './site-header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SiteHeaderComponent
  ],
  declarations: [
    SiteHeaderComponent
  ]
})

export class SiteHeaderModule {}
