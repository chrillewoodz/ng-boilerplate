# Usage

```
<select-multiple [(ngModel)]="selectedItems" [options]="options" optionsLabel="name" uniqueKey="_id" placeholder="Please select an option">
  <ng-template #modelRef let-model>{{model?.name}}</ng-template>
  <ng-template #optionRef let-option>{{option?.name}}</ng-template>
</select-multiple>
```

# Inputs

###### {any[]} options
The options to display in the select

- Allowed values: Any array of objects
- Default: `[]`

###### {string} uniqueKey
A unique key which will be used to keep track of the options

- Allowed values: Any property which is also a property in each of the `options` objects
- Default: `id`

###### {number} labelsCap
The max number of selected items to show

- Allowed values: Any number above `0`
- Default: `2`

###### {boolean} disabled
Decides whether the select is disabled or not

- Allowed values: `true`, `false`
- Default: `false`

###### {string} optionsLabel
A property in each of the `options` objects to display as a label for the model

- Allowed values: Any string which is also a key in each of the `options` objects
- Default: `label`

###### {string} placeholder
The placeholder to show when there is no option selected

- Allowed values: Any string
- Default: `''`

###### {string} queryPlaceholder
The placeholder to show in the query input

- Allowed values: Any string
- Default: `'Search...'`

###### {string} label
The label of the select

- Allowed values: Any string
- Default: `''`


# Outputs

###### queryFn
Emits when the user stops typing in the query input

`$event` is the query string

# Content projection

No.

# TemplateRef

Yes.

`#modelRef`:
- Outlet contexts: `let-model`

`#optionRef`:
- Outlet contexts: `let-option`

# ControlValueAccessor

Yes.

# ChangeDetectionStrategy

`OnPush`

# Api

No.

# Directives

No.