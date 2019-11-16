import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoNewComponent } from './components/todo-new/todo-new.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoNewComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
  ],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
