import { Actions } from "app/redux/actions";

interface ITodo {
  _id?: string;
  title: string;
  description?: string;
  completed?: boolean;
  endDate?: Date;
}

type TodoState = {
  loading: boolean;
  error: "";
  todos: ITodo[];
  success: "";
};

type TodoAction = {
  type: string;
  payload: ITodo | ITodo[]| null;
  message: string;
};

export type AppReducer<
  TState extends keyof State,
  TAdditionalActions = Actions
> = (
  state: State[TState] | undefined,
  action: Actions | TAdditionalActions
) => State[TState];
