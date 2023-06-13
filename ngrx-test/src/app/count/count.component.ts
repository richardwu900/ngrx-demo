import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as countActions from './store/count.actions';
import * as countSelectors from './store/count.selectors';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  counter$ = this.store.select(countSelectors.counterSelector);
  name$ = this.store.select(countSelectors.nameSelector);
  todos$ = this.store.select(countSelectors.todosSelector);

  newName: string = '';

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(countActions.initLoadAction());
  }

  // increment, decrement, and reset trigger their respective actions
  increment() {
    this.store.dispatch(countActions.incrementAction());
  }

  decrement() {
    this.store.dispatch(countActions.decrementAction());
  }

  reset() {
    this.store.dispatch(countActions.resetAction());
  }

  setName() {
    const name = this.newName;
    this.store.dispatch(countActions.setNameAction({name}));
  }

}
