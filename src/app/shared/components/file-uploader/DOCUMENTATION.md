# Usage

With `ngModel`, no need for `filesSelected` listener here since all the files will be bound to the `ngModel` directive. However, if you want to pass some additional information whenever you select files or to know which files are existing/new you can use `filesSelected` as well.

```
<file-uploader [(ngModel)]="chosenFiles" (filesSelected)="uploadFiles($event)" [multiple]="true" btnClasses="btn btn-md btn-primary"></file-uploader>
```

Without `ngModel`, use `filesSelected` to get the selected files:

```
<file-uploader (filesSelected)="uploadFiles($event)" [multiple]="true" btnClasses="btn btn-md btn-primary"></file-uploader>
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

###### {string} btnClasses
A space separated string of classes which will be applied to the button.

- Allowed values: Any string of class names
- Default: `''`

# Outputs

###### {EventEmitter<IData>} filesSelected
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
