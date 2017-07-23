import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Directive({
  selector: '[isPage]'
})

export class IsPageDirective implements OnInit {
  @Input() url: string;

  @HostBinding('class.is-page') isPage = false;

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.isPage = event.url === this.url;
      }
    );
  }
}
