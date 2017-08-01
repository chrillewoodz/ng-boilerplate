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
  let spy: jasmine.Spy;

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

    spy = spyOn(directive, 'setHeight').and.callFake(() => {
      debugElement = fixture.debugElement.query(By.directive(WindowHeightDirective)).nativeElement;

      // Simulate that the window was changed to 500px high
      debugElement.style.height = simulatedHeight;
    });

    window.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
    expect(debugElement.style.height).toBe(simulatedHeight);
  });

  it('should not give a height if isActive is set to false', () => {

    debugElement = fixture.debugElement.query(By.directive(WindowHeightDirective)).nativeElement;

    directive.isActive = false;

    fixture.detectChanges();

    // Important to call .and.callThrough() here or `directive.isActive = false;`
    // won't take effect
    spy = spyOn(directive, 'setHeight').and.callThrough();

    window.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
    expect(debugElement.style.height).toBe('');
  });

  it('should negate the offset from the total height', () => {

    const offset = 100;

    debugElement = fixture.debugElement.query(By.directive(WindowHeightDirective)).nativeElement;

    directive.offset = offset;

    fixture.detectChanges();

    spy = spyOn(directive, 'setHeight').and.callThrough();

    window.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
    expect(debugElement.style.height).toBe(`${window.innerHeight - offset}px`);
  });
});
