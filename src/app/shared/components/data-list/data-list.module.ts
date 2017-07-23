import {NgModule} from '@angular/core';
import {PaginatorModule} from 'primeng/components/paginator/paginator';

import {SharedModule} from '@modules/shared.module';
// import {ResponsiveItemModule} from './shared/responsive-item/responsive-item.module';
import {DataListComponent} from './data-list.component';

@NgModule({
  imports: [
    SharedModule,
    // ResponsiveItemModule,
    PaginatorModule
  ],
  exports: [
    // ResponsiveItemModule,
    DataListComponent
  ],
  declarations: [
    DataListComponent
  ]
})

export class DataListModule {}
