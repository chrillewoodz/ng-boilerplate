# Usage

```
<notifications></notifications>

constructor(private notifications: NotificationsApi) {}

newNotifications(): void {

  // "theme" can be primary, complement, success, warning, danger, neutral or any other string which allows you to create custom themes
  this.notifications.newNotification({message: 'Hello world', theme: 'success'});
}
```

# Inputs

###### {number} hideAfter
The number of milliseconds to wait before hiding the notifications

- Allowed values: Any number above `0`
- Default: `3000`


# Outputs

None.

# Content projection

No.

# TemplateRef

No.

# ControlValueAccessor

No.

# ChangeDetectionStrategy

`OnPush`

# Api

Yes.

### NotificationsApi (`@components/notifications/shared/notifications-api.service`)

###### newNotification(options: any): void
Shows a new notification

# Directives

No.