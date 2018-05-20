import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpensiveTypeListComponent } from './expensive-type-list/expensive-type-list.component';
import { ExpensiveModelModule } from './model/expensive-type.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    ExpensiveTypeListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ExpensiveModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
