import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import {BreadcrumbsUtils} from './shared/breadcrumbs-utils.service';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BreadcrumbsComponent implements OnDestroy, OnInit {

  public urls: string[] = [];

  private url: string;
  private breadcrumbsSubscription: Subscription;
  private routerSubscription: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbsUtils: BreadcrumbsUtils
  ) {}

  ngOnInit() {

    // this.router.events doesn't trigger on refresh so we call this manually on load
    // or else we won't get any breadcrumbs until we navigate again
    this.generateBreadcrumbTrail(this.router.url);

    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd || event instanceof NavigationStart)
      .subscribe((event: NavigationEnd|NavigationStart) => {
        this.url = (event as NavigationEnd).urlAfterRedirects ? (event as NavigationEnd).urlAfterRedirects : event.url;
        this.urls.length = 0;
        this.generateBreadcrumbTrail(this.url);
        this.cd.markForCheck();
      }
    );

    this.breadcrumbsSubscription = this.breadcrumbsUtils.breadcrumbs.subscribe(
      () => {

        if (this.url) {
          this.urls.length = 0;
          this.generateBreadcrumbTrail(this.url);
          this.cd.markForCheck();
        }
      }
    );
  }

  ngOnDestroy() {
    this.breadcrumbsSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  generateBreadcrumbTrail(url: string): void {

    url = url.split('?')[0];

    if (!this.breadcrumbsUtils.isRouteHidden(url)) {

      // Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
      this.urls.unshift(url);
    }

    if (url.lastIndexOf('/') > 0) {
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
    }
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  friendlyName(url: string): string {

    if (url.includes('eventId')) {

      url = url.substring(0, url.indexOf('?'));

      return !url ? '' : this.breadcrumbsUtils.getFriendlyNameForRoute(url);
    }
    else {
      return !url ? '' : this.breadcrumbsUtils.getFriendlyNameForRoute(url);
    }
  }
}
