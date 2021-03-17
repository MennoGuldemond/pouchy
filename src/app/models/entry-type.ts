export enum EntryType {
  Income,
  Expense,
}

export const EntryTypes = Object.values(EntryType).filter(
  (value) => typeof value === 'number'
);

export const EntryTypeLabels: Record<EntryType, string> = {
  [EntryType.Income]: 'Income',
  [EntryType.Expense]: 'Expense',
};
