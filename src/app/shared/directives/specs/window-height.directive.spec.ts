import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {UnitTestComponent} from './unit-test/unit-test.component';
import {WindowHeightDirective} from '@directives/window-height.directive';

describe('WindowHeightDirective', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent,
        WindowHeightDirective
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('', () => {

  });
});
