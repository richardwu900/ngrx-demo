import { createReducer, on } from "@ngrx/store";
import { countState } from "./count.state";
import * as CountActions from "./count.actions"; // arguably better than importing 1x1

export const initialCountState: countState = {
    todos: [],
    counter: 0,
    name: 'John Doe'
};

export const countReducer = createReducer(
    initialCountState,
    // When incrementAction happens, take current state as an argument and
    // return a new state with the same state but with the counter incremented.
    on(CountActions.incrementAction, state => ({
        ...state,
        counter: state.counter + 1
    })),
    on(CountActions.decrementAction, state => ({
        ...state,
        counter: state.counter - 1
    })),
    on(CountActions.resetAction, state => ({
        ...state,
        counter: 0
    })),
    on(CountActions.setNameAction, (state, { name }) => ({
        ...state,
        name: name
    })),
    on(CountActions.onLoadAction, (state, { todos }) => ({
        ...state,
        todos: todos
    })),
);
