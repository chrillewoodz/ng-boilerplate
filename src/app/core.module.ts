import {NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

// Providers
import {COMPONENTS_PROVIDERS} from '@components/providers';
import {GUARDS_PROVIDERS} from '@guards/providers';
import {INTERCEPTORS_PROVIDERS} from '@interceptors/providers';
import {SERVICES_PROVIDERS} from '@services/providers';

@NgModule({
  imports: [
    HttpClientModule
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
