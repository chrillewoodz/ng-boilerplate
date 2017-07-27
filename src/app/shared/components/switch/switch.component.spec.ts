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
  let spy: any;

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

  it('should have a unique id of type string', () => {
    expect(component.id).toBeDefined();
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
