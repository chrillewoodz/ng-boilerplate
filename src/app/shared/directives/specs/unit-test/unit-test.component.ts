import {Component, OnInit, ViewChild} from '@angular/core';

import {IsRouteDirective} from '@directives/is-route.directive';
import {WindowHeightDirective} from '@directives/window-height.directive';

@Component({
  selector: 'unit-test-component',
  templateUrl: './unit-test.component.html'
})

export class UnitTestComponent implements OnInit {
  @ViewChild(WindowHeightDirective) windowHeight: WindowHeightDirective;
  @ViewChild(IsRouteDirective) isRoute: IsRouteDirective;

  public url = 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg';

  constructor() {}

  ngOnInit() {}
}
