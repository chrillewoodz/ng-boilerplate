import {NgModule} from '@angular/core';
import {Http} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// 3rd party
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// App
import {CoreModule} from './core.module';
import {ComponentsModule} from '@modules/components.module';
import {AppRouterModule} from './app-router.module';
import {AppComponent} from './app.component';
import {AppConstants} from '@constants/app-constants.constant';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: `${AppConstants.prefix}.appId`}),
    BrowserAnimationsModule,
    CoreModule,
    ComponentsModule,

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

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
