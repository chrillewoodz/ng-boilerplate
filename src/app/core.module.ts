import {NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

// Providers
import {COMPONENTS_PROVIDERS} from '@components/providers';
import {GUARDS_PROVIDERS} from '@guards/providers';
import {SERVICES_PROVIDERS} from '@services/providers';

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // Core angular services
    DatePipe,

    // Providers
    ...COMPONENTS_PROVIDERS,
    ...GUARDS_PROVIDERS,
    ...SERVICES_PROVIDERS
  ]
})

export class CoreModule {}
