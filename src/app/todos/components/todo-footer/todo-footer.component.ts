import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as TodoActions from '../../store/todo.actions';
import * as TodoSelectors from '../../store/todo.selectors';
import { AppState } from '../../../store/app.reducer';
import { TodoFilter } from '../../shared/todo-filter.enum';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFooterComponent implements OnInit {
  todosLeftToComplete$: Observable<number>;
  filter$: Observable<TodoFilter>;
  totalTodos$: Observable<number>;
  totalTodosCompleted$: Observable<number>;

  todoFilter = TodoFilter;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.todosLeftToComplete$ = this.store.select(
      TodoSelectors.selectTodosLeftToComplete
    );
    this.filter$ = this.store.select(TodoSelectors.selectFilter);
    this.totalTodos$ = this.store.select(TodoSelectors.selectTotalTodos);
    this.totalTodosCompleted$ = this.store.select(
      TodoSelectors.selectTotalTodosCompleted
    );
  }

  updateFilter(filter: TodoFilter): void {
    this.store.dispatch(TodoActions.updateFilter({ filter }));
  }

  clearCompleted(): void {
    this.store
      .select(TodoSelectors.selectTodosCompleted)
      .pipe(take(1))
      .subscribe(todos => {
        const ids = todos.map(todo => todo.id);
        this.store.dispatch(TodoActions.deleteTodos({ ids }));
      });
  }
}
