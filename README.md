# ng-boilerplate
The best and only boilerplate you will ever need.


# Focus on the things that truly matters
Are you tired of installing boilerplates that are cluttered with stuff that doesn't make sense or that you will never need? 
Do you find yourself copy and pasting endless of folders and code from different projects in order to get started with a new project?

**Look no further.**

This is a boilerplate for Angular applications which includes all the necessary things to build and deploy a fully functional application. This setup has been thoroughly tested across multiple large scale applications and **it works**. It's a really smooth experience working with this structure and it can scale to any level. You get fundamental components such as a select, dropdowns, modals etc. which saves you an enormous amount of time when developing your applications. 

Everything is lightweight and carefully put together in order to be as dynamic and re-useable as possible. 


# Install

### With git clone
- Run `git clone https://github.com/chrillewoodz/ng-boilerplate.git`.
- Remove the **hidden** `.git` folder in the project.
- Run `npm install`
- Go to `src/app/shared/constants/app-constants.constant.ts` and set your host(s) and app prefix. 
- Run `ng serve`

### With zip
- Download this repo as zip and unpack it where you want it to be
- Run `npm install`
- Go to `src/app/shared/constants/app-constants.constant.ts` and set your host(s) and app prefix. 
- Run `ng serve`


# What's included?
This repository comes with a rich setup of basic things that are needed in order to get going in a matter of minutes.
Take a look below to see what is provided.


### Features
- Server side rendering with Angular Universal. (coming soon)
- i18n language translations using `@ngx/translate/core`.
- Unit tests.
- E2E tests.
- Lodash.
- Configurated paths to make imports easier.
- Font Awesome (if you use Fort Awesome you can remove this dependency).
- PrimeNG (some components that are in PrimeNG have also been custom written in this project since their components aren't customizeable enough sometimes).


### Available paths
- `@animations`
- `@components`
- `@constants`
- `@config`
- `@directives`
- `@guards`
- `@interfaces`
- `@modules`
- `@pipes`
- `@services`
- `@validators`


### Default languages
- English
- Swedish

**These are just filled with weekdays and months translations from the start**


### SASS
- Bootstrap's grid system. A `config.json` file is included in case you want to add something else from bootstrap. This uses Bootstrap 3 until Bootstrap 4 is released.
- A palette which allows you to add colors which are then accessed by calling a function. For example `color: palette('primary', 'dark')`.
- A variable sheet which you can use to customize the basic look of your site.
- A set of different button classes which gives you a filled, outlined or no background button for each button theme (color).
- Utility classes.
- A set of useful mixins for controlling anchors, positioning, media queries, placeholders and more.

**Got a CSS/SASS request? Please open an issue and be as specific as possible with the behavior, requirements etc.**

### Components (`@components/*`)
- `BreadcrumbsComponent`/`<breadcrumbs></breadcrumbs>`, provides a breadcrumbs trail depending on the current url. Exposes `BreadcrumbsUtils` which allows for great control over these breadcrumbs.
- `CheckboxComponent`/`<checkbox></checkbox>`, provides a beatiful custom checkbox.
- `CheckboxesComponent`/`<checkboxes></checkboxes>`, a list of checkboxes which has an array as the model containing all the selected values.
- `DataListComponent`/`<data-list></data-list>`, a data table list which provides a quick and DRY way of creating lists of data.
- `DropdownComponent`/`<dropdown></dropdown>`, a simple dropdown with clickable items.
- `DropdownSelectComponent`/`<dropdown-select></dropdown-select>`, a simple dropdown with clickable items, also has a model which stores the current value. It's like a select element but with the look of a dropdown.
- `FileUploaderComponent`/`<file-uploader></file-uploader>`, a button which toggles the file select on the used device.
- `ModalComponent`/`<modal></modal>`, a modal (lightbox) with a set of different looks which are controlled with `position` and `size`. Really efficient as it can expose a `currentTemplate` variable which allows you to have a single instance of the modal on a page but with several different templates that it switches between. Exposes an API for programmatically controlling the modal as well as utility directives which opens, closes and toggles the modal with ease.
- `NotiticationsComponent`/`<notifications></notifications>`, shows notifications when something happens. For example when a user saves something or something went wrong.
- `SelectComponent`/`<custom-select></custom-select>`, a select element which replaces the native `select` element so that it can be styled.
- `SelectMultipleComponent`/`<select-multiple></select-multiple>`, a select element which allows for multiple items to be selected.
- `SearchInputComponent`/`<search-input></search-input>`, an input which debounces what the user types and exposes a callback with the written value. Usually used as a query input along with a list of results.
- `SiteFooterComponent`/`<site-footer></site-footer>`, a site footer elememt.
- `SiteHeaderComponent`/`<site-header></site-header>`, a site header element.
- `SwitchComponent`/`<switch></switch>`, a beautiful switch element that toggles between `true/false`.

A lot of these components have additional APIs, directives, pipes etc. which can be used. Check the `shared` folder in each component to see what can be used. I will try to add a `README.md` file for each with documentation on how to use it.

**Got a component request? Please open an issue and be as specific as possible with the behavior, requirements etc.**


### Services (`@services/*`)
- `HttpWrapper`, wraps Angular's `Http` and allows you to add headers, params and data for each request that is made from your app.
- `Api`, wraps `HttpWrapper` and makes requests relative to a certain domain. This service is used for making calls to the applications's backend API. External http resources should be called with `Http` directly.
- `Cookies`, provides a fallback option for when `localStorage` isn't available on a device. Such as privacy mode in Safari on mobile devices.
- `ClientStorage`, automatically fallbacks to cookies if `localStorage` isn't available. This is what you will use most of the times rather than calling `localStorage` or `Cookies`. It also automatically stringifies and parse your data so you don't have to worry about it every time.
- `StorageLogger`, when storing data via this service it will also expose an `Observable` which you can subscribe to in order to react to changes to `localStorage` or cookies.
- `Utils`, a static service which exposes a set of useful functions such as `findObjectIndex`, `findObjectByQuery` and `getUniqueID` and more.
- `DateService`, a service which contains useful functions for working with dates. Currently only filled with a function for providing locale data for the PrimeNG datepicker.

**Got a service request? Please open an issue and be as specific as possible with the behavior, requirements etc.**


### Pipes (`@pipes/*`)
- `CapitalizePipe`/`capitalize`, the first letter of the value (not each word)
- `SortByPipe`/`sortBy`, sort by property
- `SortNumbersPipe`/`sortNumbers`, sort numbers
- `SortStringsPipe`/`sortStrings`, sort strings
- `FilterByPipe`/`filterBy`, filter by query

**Got a pipe request? Please open an issue and be as specific as possible with the behavior, requirements etc.**


### Directives (`@directives/*`)
- `WindowHeightDirective`/`windowHeight`, gets the window height and continously applies it to the host element every time the window resizes (with a debounce function so it's efficient).
- `UrlToBackgroundDirective`/`urlToBackground`, takes an url (`urlToBackground url="https://google.com/funny-looking-duck.png"`) and turns it into an element background (**not** an `img` tag). Can be combined with `bg-center` CSS class to create a background which is centered fast.
- `BackgroundLoadedDirective`/`backgroundLoaded`, exposes a `(loaded)` event listener for when a background is loaded. Can be used to ease in elements once they've finished loading for a smoother user experience. 
- `IsPageDirective`/`isPage`, takes a route url and compares it to the current route to see if it's the same page. If it is, it will apply an `is-page` class to the host element.
- `ClickOutsideDirective`/`clickOutside`, listens for clicks outside of the host element. Accepts a list of `exceptions` which is a list of HTML elements (use local template variables and pass those in). Exposes `(outsideClick)` for when a click outside was made.
- `SelectItem`/`selectItem`, is applied to the `CheckboxComponent` (`<checkbox selectItem></checkbox>`). It will listen for changes to `ngModel` and add or remove it to a list of `selected` items.
- `SelectAll`/`selectAll`, is applied to any clickable element and takes an `items` list as an input and toggles a specific property in each item depending on if one or more of them is `false` and vice versa. Combine with `SelectItem` if you have a list of items which each has a checkbox, for example. 

**Got a directive request? Please open an issue and be as specific as possible with the behavior, requirements etc.**


### Interfaces (`@interfaces/*`)

- `CustomResponse`, an interface to specify how the data is structured that you receive as a response from the backend API.


### Validators (`@validators/*`)
- `CustomValidators`, wraps every validator in one constant which you then import where you need to use it.
- `EmailValidator`, validates a string to see if it's a valid email address format.
- `ConditionalValidator`, validates that a boolean value is equal to the condition given.
- `EqualToValidator`, validates that a value is equal to another value.
- `FieldsEqualValidator`, is applied to a form group and validates whether all fields have an equal value.


# Get access to SASS utils in encapsulated components
Add `@import './src/assets/styles/utils/_exports';` in your encapsulated component style file to gain access to mixins, functions, variables etc. (Basically everything that is available in the `utils` folder).

# FAQ

### How do I install the boilerplate?
- See the "Install" section at the top.

### How do I create a new SASS folder?
- 1. Create a new folder in the `styles` folder.
- 2. Create a new file in the new folder called `_exports.scss`.
- 3. Import the new folder's `_exports.scss` file into `styles.scss`.

### How do I create my own SASS files?
- After you have created a new file, add it as an `@import` statement in the folder's `_exports.scss` file.

### How can I get familiar with the components and how they work?
- Either look directly at the written code to see what inputs are supported and also what APIs, directives etc. that are available for that component, or take a look at each components documentation file (`README.md`).

### Are these real frequently asked questions? 
- No.


# Disclaimer
All requests regarding new features must make sense for a majority of the users of this boilerplate or I will **not** add it. If you run into any issues with the code itself in this project I will be happy to help. However, questions that seek help that are not directly related to this project will be ignored. 
