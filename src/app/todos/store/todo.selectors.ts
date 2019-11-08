import { createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.reducer';
import * as fromTodo from './todo.reducer';

export const selectTodo = (state: AppState) => state.todo;

export const selectAllTodos = createSelector(
  selectTodo,
  fromTodo.selectAllTodos
);
