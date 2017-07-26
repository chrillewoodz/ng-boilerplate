import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {
  async,
  ComponentFixtureAutoDetect,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([

          // Add feature module routes here
        ])
      ],
      declarations: [AppComponent],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
});
