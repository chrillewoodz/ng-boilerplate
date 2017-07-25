import {BreadcrumbsUtils} from './breadcrumbs/shared/breadcrumbs-utils.service';
import {ModalApi} from './modal/shared/modal-api.service';
import {NotificationsApi} from './notifications/shared/notifications-api.service';
import {SiteHeaderApi} from './site-header/shared/site-header-api.service';

export const COMPONENTS_PROVIDERS: any[] = [
  BreadcrumbsUtils,
  ModalApi,
  NotificationsApi,
  SiteHeaderApi
];
