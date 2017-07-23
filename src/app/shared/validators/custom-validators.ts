import {ConditionalValidator} from './conditional.validator';
import {Email} from './email.validator';
import {EqualToValidator} from './equal-to.validator';
import {FieldsEqualValidator} from './fields-equal.validator';

export const CustomValidators: any = {
  conditional: ConditionalValidator,
  email: Email,
  equalTo: EqualToValidator,
  fieldsEqual: FieldsEqualValidator
};
