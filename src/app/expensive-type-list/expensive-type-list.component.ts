import { Component } from '@angular/core';
import { ExpensivesTypeModel } from '../model/expensives-type.model';
import { ExpensiveTypeRepository } from '../model/expensive-type.repository';


@Component({
  selector: 'app-expensive-type-list',
  templateUrl: './expensive-type-list.component.html',
  styleUrls: ['./expensive-type-list.component.css']
})
export class ExpensiveTypeListComponent {

  get expensives(): ExpensivesTypeModel[] {
    return Object.values(this.repository.getExpensivesType());
  }

  constructor(private repository: ExpensiveTypeRepository) { }
}
