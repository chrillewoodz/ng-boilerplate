import {AbstractControl, Validators, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {IsDefined} from '@shared/utils';

export const Email: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {

  if (IsDefined(Validators.required(control))) {
    return null;
  }

  const value: string = control.value;

  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? null : {email: true};
};
