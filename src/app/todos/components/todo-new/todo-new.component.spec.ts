import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { appReducer } from '../../../store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { TodoNewComponent } from './todo-new.component';

describe('TodoNewComponent', () => {
  let component: TodoNewComponent;
  let fixture: ComponentFixture<TodoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoNewComponent],
      imports: [StoreModule.forRoot(appReducer)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
