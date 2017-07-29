import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Http} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// 3rd party
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// App
import {CoreModule} from './core.module';
import {SharedModule} from '@modules/shared.module';
import {ComponentsModule} from '@modules/components.module';
import {AppRouterModule} from './app-router.module';
import {AppComponent} from './app.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ComponentsModule,
    SharedModule,

    // Using HttpLoaderFactory so we can have file based translations
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    AppRouterModule
  ],
  declarations: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
