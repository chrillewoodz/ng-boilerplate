import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {BackgroundLoadedDirective} from '@directives/background-loaded.directive';
import {ClickOutsideDirective} from '@directives/click-outside.directive';
import {IsRouteDirective} from '@directives/is-route.directive';
import {WindowHeightDirective} from '@directives/window-height.directive';

@Component({
  selector: 'unit-test-component',
  templateUrl: './unit-test.component.html'
})

export class UnitTestComponent implements OnInit {
  @ViewChild(BackgroundLoadedDirective) backgroundLoaded: BackgroundLoadedDirective;
  @ViewChild(IsRouteDirective) isRoute: IsRouteDirective;
  @ViewChild(WindowHeightDirective) windowHeight: WindowHeightDirective;
  @ViewChild(ClickOutsideDirective) clickOutside: ClickOutsideDirective;

  public url = 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg';

  constructor() {}

  ngOnInit() {}

  loaded(e): void {
    // console.log(true)
  }

  outsideClicked(): void {
    // console.log('clicked outside')
  }
}
