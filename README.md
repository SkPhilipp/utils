# utils

My AngularJS Utilities. Module name is simply `utils`.

## utils.GlobalCountInterceptor

An `$http` interceptor that keeps track of all open HTTP requests made via `$http` and all open `PUT`, `POST` and `DELETE` requests, which are seen as "modifying" requests. This is extremely useful when a button has to be disabled or hidden when a request like that is active. For example when submitting or form or saving some row of a table.

These two counters are named `$httpOpen` and `$httpModifying`, bobth accessible on the `$rootScope`. This makes is very easy to reference them from your views, so that you can for example disable a button like this:

```html
<button class="btn btn-primary" ng-disabled="$httpModifying" ng-click="view.save()">Save</button>
```
Without having to write the same dumb logic for every button to set some flag while your request to save is active. You could also use `$httpOpen` and `$httpModifying` to display loading spinners, etc. The interceptor is pushed onto `$httpProvider`'s list of interceptors by defualt. So as soon as `utils` is required, the functionality is enabled.

## utils.autoFocus

Focuses an element when it's added to the DOM.
