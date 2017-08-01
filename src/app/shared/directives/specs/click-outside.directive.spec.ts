import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {
  async,
  ComponentFixtureAutoDetect,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {Subject} from 'rxjs/Subject';

import {UnitTestComponent} from './unit-test/unit-test.component';
import {ClickOutsideDirective} from '@directives/click-outside.directive';

describe('ClickOutsideDirective', () => {

  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  let debugElement: HTMLDivElement;
  let exception: HTMLDivElement;
  let content: HTMLDivElement;
  let spy: jasmine.Spy;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent,
        ClickOutsideDirective
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(ClickOutsideDirective)).nativeElement;
    exception = fixture.debugElement.query(By.css('.click-outside-exception')).nativeElement;
    content = fixture.debugElement.query(By.css('.click-outside-content')).nativeElement;
    spy = spyOn(component, 'outsideClicked').and.callThrough();
  });

  it('should emit clickOutside when clicking outside', () => {

    document.body.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should not emit clickOutside when clicking on an exception', () => {

    exception.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not emit clickOutside when clicking on the host', () => {

    debugElement.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not emit clickOutside when clicking on childnodes', () => {

    content.click();

    expect(spy).not.toHaveBeenCalled();
  });
});
