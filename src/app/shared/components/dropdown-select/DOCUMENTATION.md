# Usage

```
  public options = [
    {id: 0, label: 'Name', value: 'name'},
    {id: 1, label: 'Description', 'description'}
  ];

  <dropdown-select [(ngModel)]="sortBy" [options]="options">
    <!-- MAKE SURE TO INCLUDE THE ? OPERATOR -->
    <ng-template #modelRef let-model>{{model?.label}}</ng-template>
    <ng-template #optionRef let-option>{{option.label}}</ng-template>
  </dropdown-select>
```

# Inputs

###### {any[]} options
The options of the dropdown, should include at least a unique key and a label

- Allowed values: An array with objects
- Default: `[]`

###### {boolean} disabled
Decides if the dropdown is disabled or not

- Allowed values: `true`, `false`
- Default: `false`

###### {string} uniqueKey
A unique key which will be used to track the items

- Allowed values: Any string that is also a property in each of the options objects
- Default: `id`

###### {boolean} isToggleIconVisible
Whether to show the toggle icon

- Allowed values: `true`, `false`
- Default: `true`


# Outputs

None.

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
