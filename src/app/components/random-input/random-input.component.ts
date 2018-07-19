import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-random-input',
  templateUrl: './random-input.component.html',
  styleUrls: ['./random-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RandomInputComponent,
    multi: true
  }]
})
export class RandomInputComponent implements ControlValueAccessor {

  public randomNumber: number = 1;

  private onChange: Function = (randomNumber: number) => {};
  private onTouch: Function = () => {};
  private disabled: boolean = false;

  setRandomNumber(): void {
    this.writeValue(Math.random());
    this.onTouch();
  }

  // Allow Angular to set the value on the component
  writeValue(value: number): void {
    this.onChange(value);
    this.randomNumber = value;
  }

  // Save a reference to the change function passed to us by 
  // the Angular form control
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  // Save a reference to the touched function passed to us by 
  // the Angular form control
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;    
  }

  // Allow the Angular form control to disable this input
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

}
