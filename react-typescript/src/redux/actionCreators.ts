import * as actionTypes from "./actionTypes";
import { IArticle, ITodo } from "../type";
import { ActionCreator } from "redux";
export interface INewArticleAction {
  type: string,
  payload: IArticle
}

export interface INewCounter {
  type: string,
}


export interface INewTodo {
  type: string,
  payload: ITodo
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


export const addTodo: ActionCreator<INewTodo> = (payload: ITodo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload
  }
}

export const removeTodo = (payload: number) => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload
  }
}
