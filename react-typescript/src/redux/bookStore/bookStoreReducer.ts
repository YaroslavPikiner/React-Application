import { StoreCard, StoreCardState } from "../../type"
import * as actionTypes from "../actionTypes"
import { Reducer } from 'redux'
import { IAny, INewStoreCardAction } from "./bookStoreACreator"



const initStoreCard: StoreCardState = {
    storeCards: [],
    offers: [],
}

const bookStoreReducer: Reducer<StoreCardState, IAny> = (state = initStoreCard, action): StoreCardState => {
    switch (action.type) {
        case actionTypes.LOAD_CARDS:
            return {
                ...state,
                storeCards: action.payload.books
            }
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                offers: [...state.offers, action.payload],
            }
        default:
            return state
    }

}


export default bookStoreReducer;