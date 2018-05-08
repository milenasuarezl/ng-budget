import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensiveTypeListComponent } from './expensive-type-list.component';

describe('ExpensiveTypeListComponent', () => {
  let component: ExpensiveTypeListComponent;
  let fixture: ComponentFixture<ExpensiveTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensiveTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensiveTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
