import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '../shared/todo';
import { TodoFilter } from '../shared/todo-filter.enum';

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Update<Todo> }>()
);

export const updateTodos = createAction(
  '[Todo] Update Todos',
  props<{ updates: Update<Todo>[] }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodos = createAction(
  '[Todo] Delete Todos',
  props<{ ids: string[] }>()
);

export const clearTodos = createAction('[Todo] Clear Todos');

export const updateFilter = createAction(
  '[Todo] Update Filter',
  props<{ filter: TodoFilter }>()
);
