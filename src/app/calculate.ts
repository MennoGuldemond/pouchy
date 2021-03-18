import { Entry, Interval } from './models';

export function getAmountForInterval(entry: Entry, interval: Interval): number {
  switch (interval) {
    case Interval.Daily:
      return entry.amount;
    case Interval.FourWeekly:
      return entry.amount * 28;
    case Interval.Monthly:
      return (entry.amount * 365) / 12;
    case Interval.Quarterly:
      return (entry.amount * 365) / 4;
    case Interval.Weekly:
      return entry.amount * 7;
    case Interval.Yearly:
      return entry.amount * 365;
  }
}

export function getDailyAmount(amount: number, interval: Interval): number {
  switch (interval) {
    case Interval.Daily:
      return amount;
    case Interval.FourWeekly:
      return amount / 28;
    case Interval.Monthly:
      return (amount * 12) / 365;
    case Interval.Quarterly:
      return (amount * 4) / 365;
    case Interval.Weekly:
      return amount / 7;
    case Interval.Yearly:
      return amount / 365;
  }
}

export function getTotalForInterval(entries: Entry[], interval: Interval) {
  let total = 0;
  for (let i = 0; i < entries.length; i++) {
    total += getAmountForInterval(entries[i], interval);
  }
  return total;
}
