export enum IncomeCategory {
  Salary,
  Allowance,
  FinancialAsset,
}

export const IncomeCategoryTypes = Object.values(IncomeCategory).filter(
  (value) => typeof value === 'number'
);

export const IncomeCategoryLabels: Record<IncomeCategory, string> = {
  [IncomeCategory.Salary]: 'Salary',
  [IncomeCategory.Allowance]: 'Allowance',
  [IncomeCategory.FinancialAsset]: 'Financial Asset',
};
