import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {
  async,
  ComponentFixtureAutoDetect,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {SharedModule} from '@modules/shared.module';
import {SwitchComponent} from './switch.component';

describe('SwitchComponent', () => {

  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;
  let input: HTMLInputElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [SwitchComponent],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });

    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    input = fixture.debugElement.query(By.css('.checkbox')).nativeElement;
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have a default model value of false', () => {
    expect(input.checked).toBe(false);
  });

  it('should generate a unique id using the Utils service', () => {
    expect(component.id).toBeDefined();
    expect(typeof component.id).toBe('string');
  });

  it('should update the model when the input value changes', () => {
    expect(input.checked).toBe(input.checked);
    input.click();
    expect(input.checked).toBe(input.checked);
  });

  // TODO: Uncomment once https://github.com/angular/angular/issues/12313 is closed
  // it('should not update the model if disabled is true', () => {

  //   input.checked = false;

  //   component.disabled = true;

  //   fixture.detectChanges();

  //   expect(input.disabled).toBeDefined();

  //   input.click();

  //   expect(input.checked).toBe(false);
  // });
});
