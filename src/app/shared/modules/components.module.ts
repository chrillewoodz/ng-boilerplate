import {NgModule} from '@angular/core';

// 3rd party

// PrimeNG
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {PaginatorModule} from 'primeng/components/paginator/paginator';
import {SliderModule} from 'primeng/components/slider/slider';

// Components
import {COMPONENTS} from '@components/components';

@NgModule({
  imports: [

    // 3rd party

    // PrimeNG
    CalendarModule,
    PaginatorModule,
    SliderModule,

    // Components
    ...COMPONENTS
  ],
  exports: [

    // 3rd party

    // PrimeNG
    CalendarModule,
    PaginatorModule,
    SliderModule,

    // Components
    ...COMPONENTS
  ]
})

export class ComponentsModule {}
