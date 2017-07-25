import {NgModule} from '@angular/core';
import {PaginatorModule} from 'primeng/components/paginator/paginator';

import {SharedModule} from '@modules/shared.module';
import {DataListComponent} from './data-list.component';

@NgModule({
  imports: [
    SharedModule,
    PaginatorModule
  ],
  exports: [
    DataListComponent
  ],
  declarations: [
    DataListComponent
  ]
})

export class DataListModule {}
