import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '../shared/todo';

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Update<Todo> }>()
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
