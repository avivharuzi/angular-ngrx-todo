import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selectors';
import { AppState } from '../../../store/app.reducer';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.todos$ = this.store.select(TodoSelectors.selectTodosByFilter);
  }

  toggleTodo(todo: Todo): void {
    const todoUpdate: Update<Todo> = {
      id: todo.id,
      changes: { complete: !todo.complete },
    };
    this.store.dispatch(TodoActions.updateTodo({ todo: todoUpdate }));
  }

  deleteTodo(id: string): void {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }

  editTodo(todo: Todo, isNeedToEdit: boolean): void {
    const todoUpdate: Update<Todo> = {
      id: todo.id,
      changes: { text: todo.text, editing: isNeedToEdit },
    };
    this.store.dispatch(TodoActions.updateTodo({ todo: todoUpdate }));
  }

  updateTodo(todo: Todo, text: string): void {
    if (text === '') {
      this.deleteTodo(todo.id);
      return;
    }

    const todoUpdate: Update<Todo> = {
      id: todo.id,
      changes: { text, editing: false },
    };
    this.store.dispatch(TodoActions.updateTodo({ todo: todoUpdate }));
  }
}
