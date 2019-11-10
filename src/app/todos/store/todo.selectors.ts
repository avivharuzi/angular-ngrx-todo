import { createSelector } from '@ngrx/store';

import * as fromTodo from './todo.reducer';
import { AppState } from '../../store/app.reducer';
import { TodoFilter } from '../shared/todo-filter.enum';

export const selectTodo = (state: AppState) => state.todo;

export const selectAllTodos = createSelector(
  selectTodo,
  fromTodo.selectAllTodos
);

export const selectFilter = createSelector(
  selectTodo,
  state => state.filter
);

export const selectTotalTodos = createSelector(
  selectTodo,
  fromTodo.selectTotalTodos
);

export const selectTodosLeftToComplete = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => !todo.complete).length
);

export const selectTodosCompleted = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.complete)
);

export const selectTotalTodosCompleted = createSelector(
  selectTodosCompleted,
  todosCompleted => todosCompleted.length
);

export const selectTodosByFilter = createSelector(
  selectFilter,
  selectAllTodos,
  (filter, todos) =>
    todos.filter(todo => {
      switch (filter) {
        case TodoFilter.All:
          return todo;
        case TodoFilter.Active:
          return !todo.complete;
        case TodoFilter.Completed:
          return todo.complete;
        default:
          return todo;
      }
    })
);
