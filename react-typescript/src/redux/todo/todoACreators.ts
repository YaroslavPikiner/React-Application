import * as actionTypes from "../actionTypes";
import { ITodo } from "../../type";
import { ActionCreator } from "redux";

export interface INewTodo {
  type: string,
  payload: ITodo
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

export const onMarkTodo = (payload: number) => {
  return {
    type: actionTypes.ON_MARK_TODO,
    payload
  }
}
