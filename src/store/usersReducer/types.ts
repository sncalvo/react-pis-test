import User from '@models/User';

interface ReduxCall {
  type: string;
  payload: { users?: User[]; error?: string };
}

interface State {
  users: User[];
  error: string;
  loading: boolean;
}

export type { ReduxCall, State };
