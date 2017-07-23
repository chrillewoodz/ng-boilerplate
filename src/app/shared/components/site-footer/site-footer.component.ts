import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SiteFooterComponent implements OnInit {

  public currentYear: Date = new Date();

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {}
}
