import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services';
import { Entry, EntryType, ExpenseCategory, Interval } from '../../models';
import * as Calculate from '../../calculate';
import { Router } from '@angular/router';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'pchy-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.scss'],
})
export class BudgetOverviewComponent implements OnInit {
  entries: Entry[];
  chart = null;

  constructor(private budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    this.budgetService.getEntriesForUser().subscribe((entries) => {
      this.entries = entries;

      const expenses = this.entries.filter(e => e.type === EntryType.Expense);
      const grouped = this.groupArrayOfObjects(expenses, 'category');
      const data = [];
      Object.keys(grouped).forEach(group => {
        const total = Calculate.getTotalForInterval(grouped[group], Interval.Monthly);
        data.push([ExpenseCategory[group], total]);
      });

      this.chart = {
        type: ChartType.PieChart,
        height: 500,
        options: { animation: { duration: 1000, easing: 'out' }, is3D: false },
        data: data,
      };
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

  groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
}
