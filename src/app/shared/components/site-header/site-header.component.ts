import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {SiteHeaderApi} from './shared/site-header-api.service';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SiteHeaderComponent implements OnDestroy, OnInit {
  @Input() siteHeaderId: string;

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private shApi: SiteHeaderApi
  ) {}

  private shApiSubscription: Subscription;

  @HostBinding('class.state-triggered')
  isTriggered: boolean = false;

  ngOnInit() {

    this.shApiSubscription = this.shApi.states$.subscribe(
      states => {

        if (states && states.id === this.siteHeaderId) {
          this.isTriggered = !this.isTriggered;
        }
      }
    );
  }

  ngOnDestroy() {
    this.shApiSubscription.unsubscribe();
  }
}
