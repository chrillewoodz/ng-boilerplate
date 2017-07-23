import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {BreadcrumbsComponent} from './breadcrumbs.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    BreadcrumbsComponent
  ],
  declarations: [
    BreadcrumbsComponent
  ]
})

export class BreadcrumbsModule {}
