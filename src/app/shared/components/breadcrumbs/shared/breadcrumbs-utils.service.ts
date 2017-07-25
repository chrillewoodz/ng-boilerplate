import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class BreadcrumbsUtils {

    public breadcrumbs: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    private routesFriendlyNames: Map<string, string> = new Map<string, string>();
    private routesFriendlyNamesRegex: Map<string, string> = new Map<string, string>();
    private routesWithCallback: Map<string, (string) => string> = new Map<string, (string) => string>();
    private routesWithCallbackRegex: Map<string, (string) => string> = new Map<string, (string) => string>();
    private hideRoutes: Array<string> = new Array<string>();
    private hideRoutesRegex: Array<string> = new Array<string>();

    /* Specifies a friendly name for the corresponding route
     *
     * @param {String} route [the route (url) that should get a friendly name]
     * @param {String} name [the new friendly name to give to the route]
     * @returns {Void}
     */
    addFriendlyNameForRoute(route: string, name: string): void {
      this.routesFriendlyNames.set(route, name);
      this.breadcrumbs.next(null);
    }

    /* Specifies a friendly name for the corresponding route by matching the route via a regex,
     * used when the route contains parameters (:id, :name etc) and you don't know the exact route
     *
     * @param {String} routeRegex [the regex matching the route (url) that should get a friendly name]
     * @param {String} name [the new friendly name to give to the route]
     * @returns {Void}
     */
    addFriendlyNameForRouteRegex(routeRegex: string, name: string): void {
      this.routesFriendlyNamesRegex.set(routeRegex, name);
      this.breadcrumbs.next(null);
    }

     /* Specifies a callback for the corresponding route, when a matching url is navigated to,
      * the callback function is invoked to get the name to be displayed in the breadcrumb trail
      *
      * @param {String} route [the route (url) that should get a friendly name]
      * @param {Function} callback [a function which returns the name for the breadcrumb]
      * @returns {Void}
      */
    addCallbackForRoute(route: string, callback: (parameter: string) => string): void {
      this.routesWithCallback.set(route, callback);
      this.breadcrumbs.next(null);
    }

    /* Specifies a friendly name via a callback for the corresponding route by matching the route via a regex,
     * used when the route contains parameters (:id, :name etc) and you don't know the exact route
     *
     * @param {String} routeRegex [the regex matching the route (url) that should get a friendly name]
     * @param {Function} callback [a function which returns the name for the breadcrumb]
     * @returns {Void}
     */
    addCallbackForRouteRegex(routeRegex: string, callback: (parameter: string) => string): void {
      this.routesWithCallbackRegex.set(routeRegex, callback);
      this.breadcrumbs.next(null);
    }

    /* Show the friendly name for a given route. If no match is found the url (without the leading '/') is shown.
     *
     * @param {String} route [the route to get the friendly name for]
     * @returns {String} [the friendly name of the route]
     */
    getFriendlyNameForRoute(route: string): string {

      let name: string;
      const routeEnd: string = route.substr(route.lastIndexOf('/') + 1, route.length);

      this.routesFriendlyNames.forEach((value, key, map) => {

        if (key === route) {
          name = value;
        }
      });

      this.routesFriendlyNamesRegex.forEach((value, key, map) => {

        if (new RegExp(key).exec(route)) {
          name = value;
        }
      });

      this.routesWithCallback.forEach((value, key, map) => {

        if (key === route) {
          name = value(routeEnd);
        }
      });

      this.routesWithCallbackRegex.forEach((value, key, map) => {

        if (new RegExp(key).exec(route)) {
          name = value(routeEnd);
        }
      });

      return name ? name : routeEnd;
    }

    /* Specifies a route that should not be shown in the breadcrumb
     *
     * @param {String} route [the route to hide in the breadcrumb]
     * @returns {Void}
     */
    hideRoute(route: string): void {

      if (this.hideRoutes.indexOf(route) === -1) {
        this.hideRoutes.push(route);
      }
    }

    /* Specifies a route via a regular expression that should not be shown in the breadcrumb
     *
     * @param {String} routeRegex [the route regex that matches a route to hide in the breadcrumb]
     * @returns {Void}
     */
    hideRouteRegex(routeRegex: string): void {

      if (this.hideRoutesRegex.indexOf(routeRegex) === -1) {
        this.hideRoutesRegex.push(routeRegex);
      }
    }

    /* Returns true if a given route should be hidden
     *
     * @param {String} route [the route to check hidden state for]
     * @returns {Boolean} [true if the route is hidden]
     */
    isRouteHidden(route: string): boolean {

      let isHidden = this.hideRoutes.indexOf(route) !== -1;

      this.hideRoutesRegex.forEach((value) => {

        if (new RegExp(value).exec(route)) {
          isHidden = true;
        }
      });

      return isHidden;
    }
}
