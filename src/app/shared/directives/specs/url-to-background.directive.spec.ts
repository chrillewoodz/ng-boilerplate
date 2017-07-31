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
import {UrlToBackgroundDirective} from '@directives/url-to-background.directive';

describe('UrlToBackgroundDirective', () => {

  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  let debugElement: HTMLDivElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent,
        UrlToBackgroundDirective
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
  });

  it('should take an url and set a background-image attribute', () => {

    debugElement = fixture.debugElement.query(By.directive(UrlToBackgroundDirective)).nativeElement;

    expect(debugElement.style.backgroundImage).toBe(`url(\"${component.url}\")`);
  });
});
