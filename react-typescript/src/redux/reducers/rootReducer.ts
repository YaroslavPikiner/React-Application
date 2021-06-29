import { combineReducers } from 'redux';
import { ArticleState, CounterState, TodoState, StoreCardState } from '../../type';

import articleReducer from '../article/articleReducer';
import counterReducer from '../counter/counterReducer';
import todoReducer from '../todo/todoReducer';
import bookStoreReducer from '../bookStore/bookStoreReducer';

export const rootReducer = combineReducers({
  articleReducer,
  counterReducer,
  todoReducer,
  bookStoreReducer
});
export interface IAppState {
  readonly articleReducer: ArticleState;
  readonly counterReducer: CounterState;
  readonly todoReducer: TodoState;
  readonly bookStoreReducer: StoreCardState;
}

export type State = ReturnType<typeof rootReducer>;