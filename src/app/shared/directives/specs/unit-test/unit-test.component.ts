import {Component, OnInit, ViewChild} from '@angular/core';

import {WindowHeightDirective} from '@directives/window-height.directive';

@Component({
  selector: 'unit-test-component',
  templateUrl: './unit-test.component.html'
})

export class UnitTestComponent implements OnInit {
  @ViewChild(WindowHeightDirective) windowHeight: WindowHeightDirective;

  constructor() {}

  ngOnInit() {}
}
