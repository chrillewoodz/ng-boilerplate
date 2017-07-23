import {AbstractControl, Validators, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {Utils} from '@services/utils.service';

export const Email: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {

  if (Utils.isDefined(Validators.required(control))) {
    return null;
  }

  const value: string = control.value;

  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? null : {email: true};
};
