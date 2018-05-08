import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expensiveForm: FormGroup;
  factors: String[];
  expensives = new FormArray([]);

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.factors = ['otp', 'pin', 'others'];
    this.initForm();
  }

  onAddExpensive(): void {
    (<FormArray>this.expensiveForm.get('expensives')).push(
      new FormGroup({
        'min': new FormControl(null, Validators.required),
        'max': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteExpensive(idExpensive: number): void {
    (<FormArray>this.expensiveForm.get('expensives')).removeAt(idExpensive);
  }

  private initForm() {
    this.expensiveForm = this.formBuilder.group({
      min: ['', Validators.required],
      maximo: ['', Validators.required],
      factor1: ['', Validators.required],
      factor2: ['', Validators.required],
      expensives: this.expensives
    });
  }

  onFormSubmit() : void {}
}

