import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export const ConditionalValidator: (c: boolean) => ValidatorFn = (condition: boolean): ValidatorFn => {

  return (control: AbstractControl): {[key: string]: boolean} => {

    return condition === control.value ? null : {
      conditional: true
    };
  };
};
