import { Status } from './Status';

export type State<T> =
  | { status: Status.IDLE; data: null; error: null }
  | { status: Status.PENDING; data: null; error: null }
  | { status: Status.RESOLVED; data: T; error: null }
  | { status: Status.REJECTED; data: null; error: { message: string } };
