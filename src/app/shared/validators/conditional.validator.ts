import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export const ConditionalValidator = (condition: boolean): ValidatorFn => {

  return (control: FormControl): {[key: string]: boolean} => {

    return condition === control.value ? null : {
      conditional: true
    };
  };
};
