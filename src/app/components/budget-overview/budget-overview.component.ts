import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services';
import { Entry, EntryType, Interval } from '../../models';
import * as Calculate from '../../calculate';
import { Router } from '@angular/router';

@Component({
  selector: 'pchy-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.scss'],
})
export class BudgetOverviewComponent implements OnInit {
  entries: Entry[];

  constructor(private budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    this.budgetService.getEntriesForUser().subscribe((entries) => {
      this.entries = entries;
    });
  }

  AddEntry(): void {
    this.router.navigate(['edit']);
  }

  getMonthlyIncome(): number {
    const incomeEntries = this.entries.filter(
      (e) => e.type === EntryType.Income
    );
    return Calculate.getTotalForInterval(incomeEntries, Interval.Monthly);
  }

  getMonthlyExpenses(): number {
    const expenseEntries = this.entries.filter(
      (e) => e.type === EntryType.Expense
    );
    return Calculate.getTotalForInterval(expenseEntries, Interval.Monthly);
  }
}
