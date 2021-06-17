import { combineReducers } from 'redux';
import { ArticleState, CounterState } from '../../type';

import articleReducer from './articleReducer'
import counterReducer from './counterReducer'


export const rootReducer = combineReducers({
    articleReducer,
    counterReducer
});

export interface IAppState {
    readonly articleReducer: ArticleState;
    readonly counterReducer: CounterState;
  }

export type State = ReturnType<typeof rootReducer>;