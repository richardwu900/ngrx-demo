import { Todo } from "../todo.model";

// the interface that defines our state structure 
export interface countState {
    todos: Todo[];
    counter: number;
    name: string;
}