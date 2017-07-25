# Usage

`<breadcrumbs></breadcrumbs>`

# Inputs

None.

# Outputs

None.

# TemplateRef

No.

# ControlValueAccessor

No.

# ChangeDetectionStrategy

`OnPush`

# Api

Yes.

### BreadcrumbsUtils (`@components/breadcrumbs/shared/breadcrumbs-utils.service`)
Allows you to manipulate each individual label of the breadcrumbs

###### addFriendlyNameForRoute(route: string, name: string): void
Specifies a friendly name for the corresponding route

###### addFriendlyNameForRouteRegex(routeRegex: string, name: string): void
Specifies a friendly name for the corresponding route by matching the route via a regex, used when the route contains parameters (:id, :name etc) and you don't know the exact route

###### addCallbackForRoute(route: string, callback: (parameter: string) => string): void
Specifies a callback for the corresponding route, when a matching url is navigated to, the callback function is invoked to get the name to be displayed in the breadcrumb trail

###### addCallbackForRouteRegex(routeRegex: string, callback: (parameter: string) => string): void
Specifies a friendly name via a callback for the corresponding route by matching the route via a regex, used when the route contains parameters (:id, :name etc) and you don't know the exact route

###### getFriendlyNameForRoute(route: string): string
Show the friendly name for a given route. If no match is found the url (without the leading '/') is shown

###### hideRoute(route: string): void
Specifies a route that should not be shown in the breadcrumb

###### hideRouteRegex(routeRegex: string): void
Specifies a route via a regular expression that should not be shown in the breadcrumb

###### isRouteHidden(route: string): boolean
Returns true if a given route should be hidden

# Directives

No.
