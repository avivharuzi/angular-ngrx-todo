import { Action, combineReducers } from '@ngrx/store';

import * as fromTodo from './../todos/store/todo.reducer';

export interface AppState {
  todo: fromTodo.State;
}

const appReducer = combineReducers<AppState>({
  todo: fromTodo.reducer,
});

export function reducer(state: AppState, action: Action) {
  return appReducer(state, action);
}
