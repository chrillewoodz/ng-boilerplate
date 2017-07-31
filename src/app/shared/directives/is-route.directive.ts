import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Directive({
  selector: '[isRoute]'
})

export class IsRouteDirective implements OnInit {
  @Input('isRoute') route: string;

  @HostBinding('class.is-route') isRoute = false;

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.isRoute = event.url === this.route;
        console.log(this.isRoute)
      }
    );
  }
}
