import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodoActions from './todo.actions';
import { Todo } from '../shared/todo';
import { TodoFilter } from '../shared/todo-filter.enum';

export interface State extends EntityState<Todo> {
  filter: TodoFilter;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  filter: TodoFilter.All,
});

const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => {
    return adapter.addOne(todo, state);
  }),
  on(TodoActions.updateTodo, (state, { todo }) => {
    return adapter.updateOne(todo, state);
  }),
  on(TodoActions.updateTodos, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(TodoActions.deleteTodo, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(TodoActions.deleteTodos, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(TodoActions.clearTodos, state => {
    return adapter.removeAll({ ...state });
  }),
  on(TodoActions.updateFilter, (state, { filter }) => {
    return {
      ...state,
      filter,
    };
  })
);

export function reducer(state: State, action: Action) {
  return todoReducer(state, action);
}

const { selectAll, selectTotal } = adapter.getSelectors();

export const selectAllTodos = selectAll;

export const selectTotalTodos = selectTotal;
