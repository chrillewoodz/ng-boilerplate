# Usage

```
<file-uploader [(ngModel)]="chosenFiles" (filesSelected)="uploadFiles($event)" [multiple]="true" btnClasses="btn-md btn-primary"></file-uploader>
```

# Inputs

###### {any} info
Any additional data that should be emitted along with the files

- Allowed values: Anything
- Default: `null`

###### {boolean} multiple
Decides if more than one file can be chosen

- Allowed values: `true`, `false`
- Default: `false`

###### {number} max
The maximum number of files that can be chosen

- Allowed values: Any number higher than `0` 
- Default: `null`

###### {string} btnClasses
A space separated string of classes which will be applied to the button, `btn` is already applied so no need to include it

- Allowed values: Any string of class names
- Default: `''`

# Outputs

###### {EventEmitter<any>} filesSelected
Emits when the last file has been read by `FileReader`

`$event`:
- `existingFiles`
- `newFiles`
- `info`

# TemplateRef

No.

# ControlValueAccessor

Yes.

# ChangeDetectionStrategy

`OnPush`

# Api

No.

# Directives

No.
