export enum Interval {
  Daily,
  Weekly,
  FourWeekly,
  Monthly,
  Quarterly,
  Yearly,
}

export const IntervalTypes = Object.values(Interval).filter(
  (value) => typeof value === 'number'
);

export const IntervalLabels: Record<Interval, string> = {
  [Interval.Daily]: 'Daily',
  [Interval.Weekly]: 'Weekly',
  [Interval.FourWeekly]: 'Every four weeks',
  [Interval.Monthly]: 'Monthly',
  [Interval.Quarterly]: 'Quarterly',
  [Interval.Yearly]: 'Yearly',
};
