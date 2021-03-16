import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  Entry,
  EntryType,
  EntryTypeLabels,
  Interval,
  IntervalLabels,
} from '../../models';
import { BudgetService } from '../../services';

@Component({
  selector: 'pchy-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.scss'],
})
export class BudgetEditComponent implements OnInit {
  intervalLabels = IntervalLabels;
  intervalTypes = Object.values(Interval).filter(
    (value) => typeof value === 'number'
  );
  entryTypeLabels = EntryTypeLabels;
  entryTypes = Object.values(EntryType).filter(
    (value) => typeof value === 'number'
  );

  entry: Entry;
  editEntryForm: FormGroup;

  constructor(
    private budgetService: BudgetService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.entry = new Entry();
    this.buildForm();
  }

  buildForm(): void {
    this.editEntryForm = this.formBuilder.group({
      type: [this.entry.type, [Validators.required]],
      name: [this.entry.name, [Validators.required]],
      amount: [this.entry.amount, [Validators.required]],
      description: this.entry.description,
      interval: [this.entry.interval, [Validators.required]],
    });
  }

  save(): void {
    const toSave: Entry = {
      ...this.entry,
      type: this.editEntryForm.value.type,
      name: this.editEntryForm.value.name,
      description: this.editEntryForm.value.description,
      amount: this.editEntryForm.value.amount,
      interval: this.editEntryForm.value.interval,
    };

    this.budgetService.save(toSave).subscribe((id) => {
      this.router.navigate(['overview']);
    });
  }
}
