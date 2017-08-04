import {AbstractControl, ValidatorFn} from '@angular/forms';

import {ConditionalValidator} from './conditional.validator';
import {Email} from './email.validator';
import {EqualToValidator} from './equal-to.validator';
import {FieldsEqualValidator} from './fields-equal.validator';

class ICustomValidators {
  conditional: (condition: boolean) => ValidatorFn;
  email: (c: AbstractControl) => ValidatorFn;
  equalTo: (c: AbstractControl) => ValidatorFn;
  fieldsEqual: () => ValidatorFn;
};

export const CustomValidators: ICustomValidators = {
  conditional: ConditionalValidator,
  email: Email,
  equalTo: EqualToValidator,
  fieldsEqual: FieldsEqualValidator
};
