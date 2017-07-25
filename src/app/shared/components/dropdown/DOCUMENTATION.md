# Usage

```
public options = [
  {id: 0, label: 'Hello world', clickHandler: this.travelTheWorld.bind(this)},
  {id: 1, label: 'Hello universe', clickHandler: this.travelTheUniverse.bind(this)}
];

<dropdown [options]="options" [dataToEmit]="anyValue">
  <ng-template let-option>{{option.label}}</ng-template>
</dropdown>
```

# Inputs

###### {any[]} options
The options of the dropdown, should include a unique

- Allowed values: An array with objects
- Default: `[]`

###### {any} dataToEmit
Any data to pass as argument to the `clickHandler` function

- Allowed values: Anything
- Default: `false`

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

- Outlet contexts: `let-option`

# ControlValueAccessor

Yes.

# ChangeDetectionStrategy

`OnPush`

# Api

No.

# Directives

No.
