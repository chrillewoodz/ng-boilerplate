import {FormGroup, ValidatorFn} from '@angular/forms';

export const FieldsEqualValidator: () => ValidatorFn = (): ValidatorFn => {

  return (group: FormGroup): {[key: string]: boolean} => {

    const fields = [];

    for (const field in group.controls) {

      if (group.controls.hasOwnProperty(field)) {
        fields.push(group.get(field).value);
      }
    };

    const valid: boolean = fields.filter(field => !!field).length !== 0;

    return valid ? null : {
      fieldsEqual: true
    };
  };
};
