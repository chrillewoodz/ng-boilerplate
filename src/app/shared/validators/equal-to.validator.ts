import {AbstractControl, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export const EqualToValidator = (equalControl: AbstractControl): ValidatorFn => {

  let subscribe = false;

  return (control: AbstractControl): Observable<{[key: string]: boolean}> => {

    if (!subscribe) {

      subscribe = true;

      equalControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    const value: string = control.value;

    return Observable.of(equalControl.value === value ? null : {
      equalTo: true
    });
  };
};
