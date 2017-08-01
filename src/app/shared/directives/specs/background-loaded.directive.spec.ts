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
import {BackgroundLoadedDirective} from '@directives/background-loaded.directive';

describe('BackgroundLoadedDirective', () => {

  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  let debugElement: HTMLDivElement;
  let spy: jasmine.Spy;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent,
        BackgroundLoadedDirective
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(BackgroundLoadedDirective)).nativeElement;
  });

  it('should create a fake img tag', () => {

    spy = spyOn(component.backgroundLoaded, 'createImage').and.callThrough();

    // Since the life cycle hooks run too run before we have
    // registered our spy we need to change the url again to trigger the function
    component.backgroundLoaded.url = component.url;

    expect(component.backgroundLoaded.img).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit the loaded output once the img is loaded', () => {

    spy = spyOn(component, 'loaded').and.callThrough();

    // Need to call this manually or it will have fired too soon
    component.backgroundLoaded.img.onload(null);

    expect(spy).toHaveBeenCalled();
  });

  it('should set isLoaded to true once the img is loaded', () => {

    // Need to call this manually or it will have fired too soon
    component.backgroundLoaded.img.onload(null);

    expect(component.backgroundLoaded.isLoaded).toBe(true);
  });

  it('should set a background-loaded class when isLoading is true', () => {

    // Need to call this manually or it will have fired too soon
    component.backgroundLoaded.img.onload(null);

    fixture.detectChanges();

    expect(debugElement.classList.contains('background-loaded')).toBe(true);
  });
});
