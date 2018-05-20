import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  transactionTypeForm: FormGroup;
  factors: String[];
  limits = new FormArray([]);

  @Input('data') data;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.factors = ['OTP', 'PIN', 'OTHER'];
    this.initForm();
  }

  onAddRankTransactionType(): void {
    (<FormArray>this.transactionTypeForm.get('limits')).push(this.createItem());
  }

  onDeleteRankTransactionType(idRank: number): void {
    (<FormArray>this.transactionTypeForm.get('limits')).removeAt(idRank);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      valueMinimo: ['', Validators.required],
      valueMaximo: ['', Validators.required],
      factor1: [this.factors[0], Validators.required],
      factor2: [this.factors[0], Validators.required]
    });
  }

  private initForm() {
    this.transactionTypeForm = this.formBuilder.group({
      limits: this.formBuilder.array([this.createItem()])
    });
  }

  onFormSubmit(): void { }
}

