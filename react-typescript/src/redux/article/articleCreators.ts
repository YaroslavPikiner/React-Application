import * as actionTypes from "../actionTypes";
import { IArticle } from "../../type";
import { ActionCreator } from "redux";

export interface INewArticleAction {
  type: string,
  payload: IArticle
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

