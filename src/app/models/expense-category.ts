export enum ExpenseCategory {
  Housing,
  Taxes,
  Transportation,
  Groceries,
  Medical,
  Insurance,
  Food,
  Clothing,
  HouseholdItems,
  Memberships,
  Debt,
  Retirement,
  Education,
  Gifts,
  Entertainment,
}

export const ExpenseCategoryTypes = Object.values(ExpenseCategory).filter(
  (value) => typeof value === 'number'
);

export const ExpenseCategoryLabels: Record<ExpenseCategory, string> = {
  [ExpenseCategory.Housing]: 'Housing',
  [ExpenseCategory.Taxes]: 'Taxes',
  [ExpenseCategory.Transportation]: 'Transportation',
  [ExpenseCategory.Groceries]: 'Groceries',
  [ExpenseCategory.Medical]: 'Medical / Healthcare',
  [ExpenseCategory.Insurance]: 'Insurance',
  [ExpenseCategory.Food]: 'Food',
  [ExpenseCategory.Clothing]: 'Clothing',
  [ExpenseCategory.HouseholdItems]: 'HouseholdItems / Supplies',
  [ExpenseCategory.Memberships]: 'Memberships',
  [ExpenseCategory.Debt]: 'Debt',
  [ExpenseCategory.Retirement]: 'Retirement',
  [ExpenseCategory.Education]: 'Education',
  [ExpenseCategory.Gifts]: 'Gifts / Donations',
  [ExpenseCategory.Entertainment]: 'Entertainment',
};
