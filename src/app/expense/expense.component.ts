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
  ranges = new FormArray([]);

  @Input('data') data;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.factors = ['OTP', 'PIN', 'OTHER'];
    this.initForm();
  }

  onAddRankTransactionType(): void {
    (<FormArray>this.transactionTypeForm.get('ranges')).push(this.createItem());
  }

  onDeleteRankTransactionType(idRank: number): void {
    (<FormArray>this.transactionTypeForm.get('ranges')).removeAt(idRank);
  }

  private createItem(): FormGroup {
    return this.formBuilder.group({
      amountFloor: ['', Validators.required],
      amountCeil: ['', Validators.required]
    });
  }

  private getRanges(ranges: any): FormGroup[] {
    const rangesFormGroup: FormGroup[] = [];
    ranges.forEach(data => {
      rangesFormGroup.push(this.formBuilder.group({
        amountFloor: [data.amountFloor, Validators.required],
        amountCeil: [data.amountCeil, Validators.required]
      }));
    });
    return rangesFormGroup;
  }

  private initForm() {
    this.transactionTypeForm = this.formBuilder.group({
      ranges: this.formBuilder.array(this.getRanges(this.data))
    });
  }

  onFormSubmit(): void { }
}

