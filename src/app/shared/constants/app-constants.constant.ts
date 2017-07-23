import {environment} from '../../../environments/environment';

const AppPrefix = 'myApp';

class IAppConstants {
  host: string;
  token: string;
}

export const AppConstants: IAppConstants = {
  host: environment.production ? 'https://my-prod-api.com/' : 'https://my-dev-api.com',
  token: `${AppPrefix}.token`
};
