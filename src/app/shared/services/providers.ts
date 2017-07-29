import {Api} from '@services/api.service';
import {ClientStorage} from '@services/client-storage.service';
import {Cookies} from '@services/cookies.service';
import {DateService} from '@services/date.service';
import {HttpWrapper} from '@services/http-wrapper.service';
import {StorageLogger} from '@services/storage-logger.service';

export const SERVICES_PROVIDERS: any[] = [
  Api,
  ClientStorage,
  Cookies,
  DateService,
  HttpWrapper,
  StorageLogger
];
