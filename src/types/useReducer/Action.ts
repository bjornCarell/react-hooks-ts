import { Status } from './Status';

export type Action =
  | { type: Status.IDLE }
  | { type: Status.PENDING }
  | { type: Status.RESOLVED; data: any }
  | { type: Status.REJECTED; error: { message: string } };
