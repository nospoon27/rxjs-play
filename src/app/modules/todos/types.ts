export interface Todo {
  id: number;
  text: string;
}

export interface LoadTodosRequest {
  page: number;
  pageSize: number;
}

export interface CreateTodoRequest {
  text: string;
}
