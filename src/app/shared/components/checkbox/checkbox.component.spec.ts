import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import {
  async,
  ComponentFixtureAutoDetect,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {SharedModule} from '@modules/shared.module';
import {CheckboxComponent} from './checkbox.component';

describe('SwitchComponent', () => {

  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let label: HTMLLabelElement;
  let input: HTMLInputElement;
  let spy: any;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [CheckboxComponent],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    input = fixture.debugElement.query(By.css('.checkbox')).nativeElement;
    label = fixture.debugElement.query(By.css('label')).nativeElement;
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should generate a unique id of type string', () => {
    expect(component.id).toBeTruthy();
    expect(typeof component.id).toBe('string');
  });

  it('should propagate the new value when the value changes', () => {

    spy = spyOn(component, 'propagateChange');

    const checked = input.checked;

    input.click();

    // Expect the value to have changed
    expect(checked).toBe(!input.checked);

    // Expect the value to have been propagated with the new value
    expect(component.propagateChange).toHaveBeenCalledWith(input.checked);
  });

  it('should update the bindings that use @Input values', () => {
    expect(label.classList.contains(`checkbox-label-${component.size}`)).toBeTruthy();
    expect(label.classList.contains(`float-${component.float}`)).toBeTruthy();
  });

  it('should set the checked property with the new model value', () => {

    component.writeValue(true);

    expect(component.checked).toBeTruthy();
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
