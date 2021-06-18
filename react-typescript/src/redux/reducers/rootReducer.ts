import { combineReducers } from 'redux';
import { ArticleState, CounterState, TodoState } from '../../type';

import articleReducer from '../article/articleReducer';
import counterReducer from '../counter/counterReducer';
import todoReducer from '../todo/todoReducer';

export const rootReducer = combineReducers({
  articleReducer,
  counterReducer,
  todoReducer
});
export interface IAppState {
  readonly articleReducer: ArticleState;
  readonly counterReducer: CounterState;
  readonly todoReducer: TodoState;
}

export type State = ReturnType<typeof rootReducer>;