import { EntryType } from './entry-type';
import { Interval } from './interval';

export class Entry {
  constructor() {}

  id: string;
  amount: number;
  type: EntryType;
  interval: Interval;
  name: string;
  description: string;
  userUid: string;
}
