import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export const FieldsEqualValidator = (): ValidatorFn => {

  return (group: FormGroup): {[key: string]: boolean} => {

    const fields: any[] = [];

    for (const field in group.controls) {

      if (group.controls.hasOwnProperty(field)) {
        fields.push(group.get(field).value);
      }
    };

    const result: any = fields.reduce((a, b) => {
      return (a === b) ? a : NaN;
    });

    const valid: boolean = result === '' ? true : !!result;

    return valid ? null : {
      fieldsEqual: true
    };
  };
};
