import { EntryType } from './entry-type';
import { Interval } from './interval';

export interface Entry {
  amount: number;
  type: EntryType;
  interval: Interval;
  name: string;
  description: string;
  userUid: string;
}
