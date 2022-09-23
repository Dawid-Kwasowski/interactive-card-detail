import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  public cardForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      month: [null, [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern(/^[0-9]\d*$/)
      ]],
      year: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern(/^[0-9]\d*$/)
      ]],
      cvc: [null, [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.pattern(/^[0-9]\d*$/)
      ]]
    }) 
  }

  public submit() {
    console.log(this.cardForm)
  }

  public hasError(field: AbstractControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }

  get name(): AbstractControl {return this.cardForm.get('name');}
  get number(): AbstractControl {return this.cardForm.get('number');}
  get month(): AbstractControl {return this.cardForm.get('month');}
  get year(): AbstractControl {return this.cardForm.get('year');}
  get cvc(): AbstractControl {return this.cardForm.get('cvc');}
}
