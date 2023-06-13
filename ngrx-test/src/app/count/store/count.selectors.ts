import { createFeatureSelector, createSelector } from '@ngrx/store';
import { countState } from './count.state';

export const countStateFS = createFeatureSelector<countState>('stateIdentifier');

export const counterSelector = createSelector(
  countStateFS,
  state => state.counter
);

export const nameSelector = createSelector(
  countStateFS,
  state => state.name
)

export const todosSelector = createSelector(
  countStateFS,
  state => state.todos
)