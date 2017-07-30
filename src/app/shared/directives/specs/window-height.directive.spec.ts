import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {
  async,
  ComponentFixtureAutoDetect,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {UnitTestComponent} from './unit-test/unit-test.component';
import {WindowHeightDirective} from '@directives/window-height.directive';

describe('WindowHeightDirective', () => {

  let component: UnitTestComponent;
  let directive: WindowHeightDirective;
  let fixture: ComponentFixture<UnitTestComponent>;
  let debugElement: HTMLDivElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent,
        WindowHeightDirective
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    directive = component.windowHeight;
  });

  it('should have the same height as the window', () => {

    debugElement = fixture.debugElement.query(By.directive(WindowHeightDirective)).nativeElement;

    expect(debugElement.style.height).toBe(`${window.innerHeight}px`);
  });

  it('should react to window resize and set a new height', () => {

    const simulatedHeight = '500px';

    const spy = spyOn(directive, 'setHeight').and.callFake(() => {
      debugElement = fixture.debugElement.query(By.directive(WindowHeightDirective)).nativeElement;

      // Simulate that the window was changed to 500px high
      debugElement.style.height = simulatedHeight;
    });

    window.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
    expect(debugElement.style.height).toBe(simulatedHeight);
  });
});
