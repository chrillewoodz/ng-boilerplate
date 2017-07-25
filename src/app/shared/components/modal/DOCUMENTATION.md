# Usage

Example 1:

```
<modal modalId="confirmation" position="top" size="sm">
  <p>Are you sure?</p>
  <button>Yes</button>
  <button modalClose modalId="confirmation">No</button>
</modal>

<button modalOpen modalId="confirmation">Proceed</button>
```

Example 2:

```
<modal #modal modalId="confirmation" position="top" size="sm">
  <div *ngIf="modal.currentTemplate === 'step-one'">
    <p>Are you sure?</p>
    <button>Yes</button>
    <button modalClose modalId="confirmation">No</button>
  </div>
  <div *ngIf="modal.currentTemplate === 'step-two'">
    <p>Are you really, really sure?</p>
    <button>Yes</button>
    <button modalClose modalId="confirmation">No</button>
  </div>
</modal>

<button modalOpen modalId="confirmation" modalTemplate="step-one">Proceed</button>
<button modalOpen modalId="confirmation" modalTemplate="step-two">Proceed again</button>
```

# Inputs

###### {string} modalId
A unique id for the modal

- Allowed values: Any string
- Default: `undefined`

###### {string} position
The position of the modal

- Allowed values: `top`, `right`, `bottom`, `left`, `center` or any other string which allows you to create custom positioning styles
- Default: `top`

###### {string} size
The size of the modal

- Allowed values: `xs`, `sm`, `md`, `lg`, `xl`, `full`, `fluid` or any other string which allows you to create custom sizes
- Default: `sm`


# Outputs

###### closed
Emits when the modal is closed

`$event` is the `modalId`

# Content projection

Yes.

# TemplateRef

No.

# ControlValueAccessor

No.

# ChangeDetectionStrategy

`OnPush`

# Api

Yes.

### ModalApi (`@components/modal/shared/modal-api.service`)

###### open(id: string, template?: string): Promise<any>
Opens a modal

###### close(id: string): Promise<any>
Closes a modal

# Directives

Yes.

### modalOpen
Opens a modal

###### {string} modalId
The modal with the matching `modalId` to open

###### {string} modalTemplate
A specific template to show in the modal, see example in the "Usage" section for how it works

### modalClose
Closes a modal

###### {string} modalId
The modal with the matching `modalId` to close

### modalState
Sets a `modal-open` on the host element when a modal is open
