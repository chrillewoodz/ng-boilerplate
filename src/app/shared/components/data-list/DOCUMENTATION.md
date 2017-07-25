# Usage

```
<data-list [items]="items" [total]="total" [limit]="limit" uniqueKey="email" (itemClicked)="goToItem($event)" (pageChanged)="getItems($event)">
  <div header class="row">
    <div class="col-xs-4">Name</div>
    <div class="col-xs-4">Email</div>
    <div class="col-xs-4">Phone</div>
  </div>
  <ng-template let-item>
    <div class="row">
      <div class="col-xs-4">{{item.name}}</div>
      <div class="col-xs-4">{{item.email}}</div>
      <div class="col-xs-4">{{item.phone}}</div>
    </div>
  </ng-template>
</data-list>
```

# Inputs

###### {any[]} items
The items to display in the data list

- Allowed values: Any array of objects
- Default: `[]`

###### {number} total
The total number of results, used for pagination

- Allowed values: Any number above `0`
- Default: `undefined`

###### {number} limit
The total number of results to display at one time

- Allowed values: Any number above `0`
- Default: `undefined`

###### {string} uniqueKey
A unique key used for keeping track of the items

- Allowed values: Any string which is also a property in each of the `items` objects
- Default: `id`

###### {string} noResultsText
The text of the item to display when there are no results currently available in the data list

- Allowed values: Any string
- Default: `No results available`

###### {boolean} isPaginationAvailable
Decides whether pagination should be available or not

- Allowed values: `true`, `false`
- Default: `true`

# Outputs

###### pageChanged
Emits when a new page in the pagination is clicked

`$event` is the new page

###### itemClicked
Emits when an item is clicked

`$event` is the `item` object

# Content projection

Yes.

- Selectors: `header`

# TemplateRef

Yes.

- Outlet contexts: `let-item`

# ControlValueAccessor

No.

# ChangeDetectionStrategy

`OnPush`

# Api

No.

# Directives

No.
