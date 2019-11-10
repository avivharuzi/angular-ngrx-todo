import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './../todos/store/todo.reducer';

export interface AppState {
  todo: fromTodo.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  todo: fromTodo.reducer,
};
