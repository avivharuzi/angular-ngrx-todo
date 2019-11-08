import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Todo } from '../shared/todo';
import * as TodoActions from './todo.actions';

export interface State extends EntityState<Todo> {}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({});

const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => {
    return adapter.addOne(todo, state);
  }),
  on(TodoActions.updateTodo, (state, { todo }) => {
    return adapter.updateOne(todo, state);
  }),
  on(TodoActions.deleteTodo, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(TodoActions.deleteTodos, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(TodoActions.clearTodos, state => {
    return adapter.removeAll({ ...state });
  })
);

export function reducer(state: State, action: Action) {
  return todoReducer(state, action);
}

export const selectAllTodos = adapter.getSelectors().selectAll;
