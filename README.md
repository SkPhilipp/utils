# utils

My AngularJS Utilities. Module name is simply `utils`.

## utils.GlobalCountInterceptor

An `$http` interceptor that keeps track of all open HTTP requests made via `$http` and all open `PUT`, `POST` and `DELETE` requests, which are seen as "modifying" requests. This is extremely useful when a button has to be disabled or hidden when a request like that is active. For example when submitting a form or saving some row of a table, this functionality is usually requested about a million times in every project ever. With this interceptor you can get the same functionality without having to write the dumb logic for every button to set some flag while your request to save is active.

These two counters that keep track of the requests are named `$httpOpen` and `$httpModifying`. Both are accessible on the `$rootScope`. This makes is very easy to reference them from your views.

Example:

```html
<button ng-disabled="$httpModifying" ng-click="view.save()">Save</button>
```

## utils.autoFocus

Focuses an element when it's added to the DOM.
