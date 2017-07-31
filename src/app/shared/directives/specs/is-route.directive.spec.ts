import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {Subject} from 'rxjs/Subject';

import {UnitTestComponent} from './unit-test/unit-test.component';
import {IsRouteDirective} from '@directives/is-route.directive';

describe('IsRouteDirective', () => {

  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  let debugElement: HTMLDivElement;

  const routerEvents$ = new Subject<any>();

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'test', component: UnitTestComponent}
        ])
      ],
      declarations: [
        UnitTestComponent,
        IsRouteDirective
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: Router, useValue: {events: routerEvents$}}
      ]
    });

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(IsRouteDirective)).nativeElement;
  });

  it('should update isRoute state on NavigationEnd', async(() => {

    fixture.detectChanges();

    // "Navigate" to a route that doesn't match the input route
    routerEvents$.next(new NavigationEnd(1, 'some-route', null));

    expect(component.isRoute.isRoute).toBe(false);

    // "Navigate" to a route that match the input route
    routerEvents$.next(new NavigationEnd(1, 'test', null));

    expect(component.isRoute.isRoute).toBe(true);
  }));

  it('should not have an "is-route" class if isRoute is false', () => {

    component.isRoute.isRoute = false;

    fixture.detectChanges();

    expect(debugElement.classList.contains('is-route')).toBe(false);
  });

  it('should apply an is-route class if the route is /test', async(() => {

    component.isRoute.isRoute = true;

    fixture.detectChanges();

    expect(debugElement.classList.contains('is-route')).toBe(true);
  }));
});
