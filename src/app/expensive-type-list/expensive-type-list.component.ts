import { Component } from '@angular/core';
import { ExpensivesTypeModel } from '../model/expensives-type.model';
import { ExpensiveTypeRepository } from '../model/expensive-type.repository';
import { ExpenseComponent } from '../expense/expense.component';


@Component({
  selector: 'app-expensive-type-list',
  templateUrl: './expensive-type-list.component.html',
  styleUrls: ['./expensive-type-list.component.css']
})
export class ExpensiveTypeListComponent {

  expenseComponent: ExpenseComponent;

  constructor(private repository: ExpensiveTypeRepository) { }

  get expensives(): ExpensivesTypeModel[] {
    return Object.values(this.repository.getExpensivesType());
  }

  onAddRankTransactionType(): void {
    this.expenseComponent.onAddRankTransactionType();
  }

}
