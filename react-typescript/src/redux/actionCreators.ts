import * as actionTypes from "./actionTypes";
import { IArticle } from "../type";
import { ActionCreator } from "redux";
export interface INewArticleAction {
  type: string,
  payload: IArticle
}


export interface INewCounter {
  type: string,
}

export const addArticle: ActionCreator<INewArticleAction> = (payload: IArticle) => {
  return {
    type: actionTypes.ADD_ARTICLE,
    payload
  }
}

export function removeArticle(payload: IArticle) {
  return {
    type: actionTypes.REMOVE_ARTICLE,
    payload,
  }

}

export const incrementCount: ActionCreator<INewCounter> = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrementCount: ActionCreator<INewCounter> = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

