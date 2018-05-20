import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import { ExpensiveTypeRepository } from './expensive-type.repository';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [ExpensiveTypeRepository, CurrencyPipe]
})
export class ExpensiveModelModule {}
