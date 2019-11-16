import { Todo } from './todo';

describe('Todo', () => {
  const todo = new Todo('simple todo example');

  it('should create an instance', () => {
    expect(todo).toBeTruthy();
  });

  it('should be complete false', () => {
    expect(todo.complete).toBeFalsy();
  });

  it('should be editing false', () => {
    expect(todo.editing).toBeFalsy();
  });
});
