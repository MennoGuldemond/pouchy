import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services';

@Component({
  selector: 'pchy-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.scss'],
})
export class BudgetOverviewComponent implements OnInit {
  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getEntriesForUser().subscribe((entries) => {
      console.log(entries);
    });
  }
}
