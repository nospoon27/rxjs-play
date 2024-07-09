import { Injectable } from '@angular/core';
import type { CreateTodoRequest, LoadTodosRequest, Todo } from './types';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private _todos$ = new BehaviorSubject<Todo[]>([]);

  private _loadTodosAction$ = new Subject<LoadTodosRequest>();
  private _createTodoAction$ = new Subject<CreateTodoRequest>();

  todos$ = this._todos$.asObservable();

  todosLoaded(request: LoadTodosRequest) {
    this._loadTodosAction$.next(request);
  }

  todoCreated(request: CreateTodoRequest) {
    this._createTodoAction$.next(request);
  }

  constructor() {}

  private loadTodos(request: { page: number; pageSize: number }) {
    return TODOS;
  }
}

const TODOS: Todo[] = [
  {
    id: 1,
    text: '1 todo',
  },
  {
    id: 2,
    text: '1 todo',
  },
  {
    id: 3,
    text: '1 todo',
  },
];
