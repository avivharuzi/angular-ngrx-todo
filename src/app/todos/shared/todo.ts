import * as uuid from 'uuid';

export class Todo {
  id: string;
  text: string;
  complete: boolean;
  editing: boolean;

  constructor(text: string) {
    this.id = uuid.v4();
    this.text = text;
    this.complete = false;
    this.editing = false;
  }
}
