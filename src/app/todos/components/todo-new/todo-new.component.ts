import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Update } from '@ngrx/entity';

import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selectors';
import { AppState } from '../../../store/app.reducer';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoNewComponent implements OnInit {
  totalTodos$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.totalTodos$ = this.store.select(TodoSelectors.selectTotalTodos);
  }

  addTodo(text: string): string {
    if (text !== '') {
      this.store.dispatch(TodoActions.addTodo({ todo: new Todo(text) }));
    }
    return '';
  }

  toggleAll(): void {
    this.store
      .select(TodoSelectors.selectAllTodos)
      .pipe(take(1))
      .subscribe(todos => {
        let isAllNeedToBeComplete = true;
        const completed = todos.filter(todo => todo.complete);
        if (completed.length === todos.length) {
          isAllNeedToBeComplete = false;
        }
        const updates: Update<Todo>[] = todos.map(todo => {
          return {
            id: todo.id,
            changes: {
              complete: isAllNeedToBeComplete,
            },
          };
        });
        this.store.dispatch(TodoActions.updateTodos({ updates }));
      });
  }
}
