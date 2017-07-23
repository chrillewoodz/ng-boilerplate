import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import {AppConstants} from '@constants/app-constants.constant';
import {BreadcrumbsUtils} from '@components/breadcrumbs/shared/breadcrumbs-utils.service';
import {NotificationsApi} from '@components/notifications/shared/notifications-api.service';
import {ClientStorage} from '@services/client-storage.service';
import {StorageLogger} from '@services/storage-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {

  public languages = [
    {
      id: 0,
      i18n: 'sv',
      flag: {
        src: './assets/img/sv.svg'
      }
    },
    {
      id: 1,
      i18n: 'en',
      flag: {
        src: './assets/img/en.svg'
      }
    }
  ];

  public currentLanguage: any = this.languages[0];

  private storageSubscription: Subscription;

  constructor(
    private breadcrumbs: BreadcrumbsUtils,
    private notifications: NotificationsApi,
    private storageLogger: StorageLogger,
    private translate: TranslateService
  ) {}

  ngOnInit() {

    // Try to fetch an already chosen language
    const storedLanguage: any = ClientStorage.get(AppConstants.currentLanguage);
    const languageToUse: string = storedLanguage || 'en';

    // Init the i18n translation
    this.translate.use(languageToUse);
    this.storageLogger.set(AppConstants.currentLanguage, languageToUse);

    // Listen for when the language changes from other places than this component
    this.storageSubscription = this.storageLogger.logger$
      .filter(data => data && data.key === AppConstants.currentLanguage)
      .subscribe((currentLanguage: any) => {

        if (currentLanguage) {
          this.currentLanguage = Object.assign({}, currentLanguage.value, {name: this.translate.stream(currentLanguage.value.name)});
          this.translate.use(currentLanguage.value.i18n);
        }
      }
    );

    this.breadcrumbs.hideRoute('/login');

    this.breadcrumbs.addFriendlyNameForRoute('/dashboard', this.translate.instant('GLOBALS.DASHBOARD'));
    this.breadcrumbs.addFriendlyNameForRoute('/dashboard/active-tickets', this.translate.instant('GLOBALS.ACTIVE_TICKETS'));
    this.breadcrumbs.addFriendlyNameForRoute('/dashboard/my-events', this.translate.instant('GLOBALS.MY_EVENTS'));
    this.breadcrumbs.addFriendlyNameForRoute('/dashboard/languages', this.translate.instant('LANGUAGES.NAV'));

    // Accounts
    this.breadcrumbs.addFriendlyNameForRoute('/dashboard/accounts', this.translate.instant('GLOBALS.ACCOUNTS'));
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/accounts/new$', (parameter: string): string => { return this.translate.instant('ACCOUNTS.NEW'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/accounts/[a-zA-Z0-9]{0,}/edit$', (parameter: string): string => { return this.translate.instant('ACCOUNTS.EDIT'); });

    // Labels
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/labels$', (parameter: string): string => { return this.translate.instant('GLOBALS.LABELS'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/labels/new$', (parameter: string): string => { return this.translate.instant('LABELS.NEW'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/accounts/[a-zA-Z0-9]{0,}/labels$', (parameter: string): string => { return this.translate.instant('GLOBALS.LABELS'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/accounts/[a-zA-Z0-9]{0,}/labels/new$', (parameter: string): string => { return this.translate.instant('LABELS.NEW'); });

    // Label images
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/label-images$', (parameter: string): string => { return this.translate.instant('GLOBALS.LABEL_IMAGES'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/accounts/[a-zA-Z0-9]{0,}/label-images$', (parameter: string): string => { return this.translate.instant('GLOBALS.LABEL_IMAGES'); });

    // Events
    this.breadcrumbs.addFriendlyNameForRoute('/dashboard/events', this.translate.instant('GLOBALS.EVENTS'));
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/new$', (parameter: string): string => { return this.translate.instant('EVENTS.NEW'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/[a-zA-Z0-9]{0,}/edit$', (parameter: string): string => { return this.translate.instant('EVENTS.EDIT'); });

    // Event tickets
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/[a-zA-Z0-9]{0,}/tickets$', (parameter: string): string => { return this.translate.instant('GLOBALS.TICKETS'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/[a-zA-Z0-9]{0,}/tickets/new$', (parameter: string): string => { return this.translate.instant('TICKETS.NEW'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/[a-zA-Z0-9]{0,}/tickets/[a-zA-Z0-9]{0,}$', (parameter: string): string => { return this.translate.instant('TICKETS.EDIT'); });

    // Event zones
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/[a-zA-Z0-9]{0,}/zones$', (parameter: string): string => { return this.translate.instant('GLOBALS.ZONES'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/[a-zA-Z0-9]{0,}/zones/new$', (parameter: string): string => { return this.translate.instant('ZONES.NEW'); });
    this.breadcrumbs.addCallbackForRouteRegex('^/dashboard/events/[a-zA-Z0-9]{0,}/zones/[a-zA-Z0-9]{0,}$', (parameter: string): string => { return this.translate.instant('ZONES.EDIT'); });
  }

  ngOnDestroy() {
    this.storageSubscription.unsubscribe();
  }

  selectLanguage(language: any): void {

    // Replace the stream with the language CONSTANT to avoid circular json
    language.name = `LANGUAGES.${language.i18n.toUpperCase()}`;

    this.storageLogger.set(AppConstants.currentLanguage, language);

    this.notifications.newNotification({message: this.translate.instant('NOTIFICATIONS.LANGUAGES.CHANGED'), theme: 'success'});
  }
}
