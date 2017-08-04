import {AbstractControl, ValidatorFn} from '@angular/forms';

export const ConditionalValidator: (c: boolean) => ValidatorFn = (condition: boolean): ValidatorFn => {

  return (control: AbstractControl): {[key: string]: boolean} => {

    return condition === control.value ? null : {
      conditional: true
    };
  };
};
