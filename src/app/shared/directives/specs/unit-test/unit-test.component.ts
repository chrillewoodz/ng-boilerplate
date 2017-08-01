import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {CheckboxComponent} from '@components/checkbox/checkbox.component';
import {BackgroundLoadedDirective} from '@directives/background-loaded.directive';
import {ClickOutsideDirective} from '@directives/click-outside.directive';
import {IsRouteDirective} from '@directives/is-route.directive';
import {SelectItemDirective} from '@directives/select-item.directive';
import {WindowHeightDirective} from '@directives/window-height.directive';

@Component({
  selector: 'unit-test-component',
  templateUrl: './unit-test.component.html'
})

export class UnitTestComponent implements OnInit {
  @ViewChild(BackgroundLoadedDirective) backgroundLoaded: BackgroundLoadedDirective;
  @ViewChild(ClickOutsideDirective) clickOutside: ClickOutsideDirective;
  @ViewChild(IsRouteDirective) isRoute: IsRouteDirective;
  @ViewChild(WindowHeightDirective) windowHeight: WindowHeightDirective;

  public url = 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg';

  public selectedItems = [];
  public items = [{id: 0}, {id: 1}, {id: 2}];
  constructor() {}

  ngOnInit() {}

  loaded(e): void {
    // console.log(true)
  }

  outsideClicked(): void {
    // console.log('clicked outside')
  }
}
