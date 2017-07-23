import {environment} from '../../../environments/environment';

const AppPrefix = 'myApp';

class IAppConstants {
  prefix: string;
  host: string;
  token: string;
}

export const AppConstants: IAppConstants = {
  prefix: AppPrefix,
  host: environment.production ? 'https://my-prod-api.com/' : 'https://my-dev-api.com',
  token: `${AppPrefix}.token`
};
