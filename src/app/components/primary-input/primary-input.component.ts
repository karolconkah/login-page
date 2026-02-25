import { Component } from '@angular/core';
import { Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ ReactiveFormsModule],
  providers: [
     {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true
     }
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent implements ControlValueAccessor {
@Input() type: InputTypes = "text";
@Input() placeholder: string = "";
@Input() label: string = "";
@Input() inputName: string = "";

value: string = '';
disabled = false;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;       // ✅ mantém o valor sincronizado
    this.onChange(value);     // ✅ atualiza o FormControl
  }

  onBlur() {
    this.onTouched();         // ✅ marca como “tocado”
  }

  writeValue(value: any): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled; // ✅ respeita disabled do form
  }
}
