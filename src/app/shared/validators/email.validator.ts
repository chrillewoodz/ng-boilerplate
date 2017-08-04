import {AbstractControl, ValidatorFn} from '@angular/forms';

export const Email: (c: AbstractControl) => ValidatorFn = (control: AbstractControl): ValidatorFn => {

  const value: string = control.value;

  return (c: AbstractControl): {[key: string]: boolean} => {

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? null : {
      email: true
    };
  };
};
