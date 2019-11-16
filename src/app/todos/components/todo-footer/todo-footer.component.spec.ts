import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { appReducer } from '../../../store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { TodoFooterComponent } from './todo-footer.component';

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFooterComponent],
      imports: [StoreModule.forRoot(appReducer)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
