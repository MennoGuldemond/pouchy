export enum EntryType {
  Income,
  Expense,
}

export const EntryTypeLabels: Record<EntryType, string> = {
  [EntryType.Income]: 'Income',
  [EntryType.Expense]: 'Expense',
};
