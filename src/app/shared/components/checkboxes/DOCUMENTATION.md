# Usage

`<checkbox [(ngModel)]="isChecked">I agree to terms and conditions</checkbox>`

# Inputs

###### {any[]} options
The data of which to generate the checkboxes from

- Allowed values: Any array of objects
- Default: `[]`

###### {string} size
Sets the size of the checkbox & label

- Allowed values: `xs`, `sm`, `md`, `lg`, `xl` or any other string which allows you to create custom sizes
- Default: `md`

###### {string} theme
Sets the color of the checkbox

- Allowed values: `primary`, `complement`, `success`, `warning`, `danger`, `neutral` or any other string which allows you to create custom themes
- Default: `primary`

###### {string} float
Decides where the text is aligned

- Allowed values: `left`, `right`
- Default: `left`

###### {string} uniqueKey
A unique key which will be used to identify a checkbox

- Allowed values: Any string which is also a property in each of the `options` objects
- Default: `id`


# Outputs

None.

# TemplateRef

Yes.

- Outlet contexts: `let-option`

# ControlValueAccessor

Yes.

# ChangeDetectionStrategy

`OnPush`

# Api

No.

# Directives

No.
