import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoNewComponent } from './components/todo-new/todo-new.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../store/app.reducer';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodosComponent,
        TodoListComponent,
        TodoNewComponent,
        TodoHeaderComponent,
        TodoFooterComponent,
      ],
      imports: [StoreModule.forRoot(appReducer)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
