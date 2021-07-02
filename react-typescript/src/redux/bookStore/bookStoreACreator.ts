import * as actionTypes from "../actionTypes";
import { StoreCard } from "../../type";
import { ActionCreator } from "redux";
import { Dispatch } from "react";


export interface INewStoreCardAction {
    type: string,
    payload: BooksPayload
}
export interface BooksPayload {
    books: any
}

export interface IAny {
    type: string;
    payload: any
}

export interface INewBusketCardAction {
    type: string,
    payload: StoreCard
}



export const LoadCards: ActionCreator<INewStoreCardAction> = (payload: BooksPayload) => {
    return {
        type: actionTypes.LOAD_CARDS,
        payload,
    }
}


export const AddCardToBasket: ActionCreator<INewBusketCardAction> = (payload: any) => {
    return {
        type: actionTypes.ADD_TO_BASKET,
        payload,
    }
}

export const removeItemFromBasket: ActionCreator<INewBusketCardAction> = (payload: any) => {
    return {
        type: actionTypes.REMOVE_FROM_BASKET,
        payload,
    }
}


export const loadNotes = () => async (dispatch: Dispatch<INewStoreCardAction>) => {
    const cards = await fetch('https://5e4d442f9b6805001438fc21.mockapi.io/books/v1/cards/')
        .then(res => res.json())
    dispatch(LoadCards(cards));
}