import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { TodoService } from 'src/app/todo.service';
import { onLoadAction } from './count.actions';
@Injectable()
// Effects are executed after actions happen.
// Ngrx effects handle side effects like async operations in response to actions.
export class CountEffects {
    loadTodos$ = createEffect(() =>
        // for each emitted action...
        this.actions$.pipe(
            // ... actually, only actions w/ this identifier ...
            ofType('[Count] Init Load'),
            // ... we map said emitted action to the result of ...
            concatMap(() =>
                // ... the 'this.todosService.getTodos()' observable
                this.todoService.getTodos().pipe(
                    // then map to transform the emitted Todos into a new action ...
                    map((todos) => {
                        // ... using the todos as a payload for said action.
                        // within createEffect, no need to store.dispatch.myAction to dispatch Action
                        return onLoadAction({ todos }); 
                    }),
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) { }

}