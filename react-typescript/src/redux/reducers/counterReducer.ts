import { CounterState } from "../../type"
import * as actionTypes from "../actionTypes"
import { Action, Reducer } from 'redux'
import { INewCounter } from "../actionCreators"

const initCount: CounterState = {
    counter: 0
}

const counterReducer: Reducer<CounterState, INewCounter> = (
    state = initCount,
    action
): CounterState => {
    switch (action.type) {
        case actionTypes.INCREMENT: {
            const newCount = state.counter + 1
            return { ...state, counter: newCount }
        }
        case actionTypes.DECREMENT: {
            const newCount = state.counter - 1
            return { ...state, counter: newCount }
        }
    }
    return state
}

export default counterReducer


