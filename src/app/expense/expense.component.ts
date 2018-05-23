import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ExpensiveTypeModel } from '../model/expensive-type.model';

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

  onFormSubmit(): void {
    let ranges = this.transactionTypeForm.get('ranges').value;
    const isValidRange = this.isValidateRanges(ranges);
    console.log('LOL  ', isValidRange);
  }

  isValidateRanges(ranges: any): boolean {
    let isValidated = false;
    this.sortRanges(ranges);
    ranges.reduce((acum: ExpensiveTypeModel, x: ExpensiveTypeModel) => {
      if (x.amountFloor <= x.amountCeil) {
        if (!acum.amountFloor) {
          acum = x;
        } else {
          if ((+acum.amountCeil + 1) === +x.amountFloor) {
            acum = x;
            isValidated = true;
          }
        }
      }
      return acum;
    }, []);
    return isValidated;
  }

  private sortRanges(ranges: any): any {
    ranges.sort((initialRange, nextRange) => {
      return initialRange.amountFloor - nextRange.amountFloor;
    });
  }
}

