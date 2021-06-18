import { combineReducers } from 'redux';
import { ArticleState, CounterState, TodoState } from '../../type';

import articleReducer from './articleReducer'
import counterReducer from './counterReducer'
import todoReducer from './todoReducer'

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