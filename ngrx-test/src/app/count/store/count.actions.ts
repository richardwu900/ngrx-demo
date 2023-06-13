import { createAction, props } from '@ngrx/store'
import { Todo } from '../todo.model';

export const incrementAction = createAction('[Count] Increment');
export const decrementAction = createAction('[Count] Decrement');
export const resetAction = createAction('[Count] Reset');

export const setNameAction = createAction('[Count] Set Name', props<{ name: string }>());

export const initLoadAction = createAction('[Count] Init Load');

export const onLoadAction = createAction(
    '[Todos] Load Todos Success',
    props<{ todos: Todo[] }>()
);