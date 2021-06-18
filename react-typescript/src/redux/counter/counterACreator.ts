import * as actionTypes from "../../redux/actionTypes";
import { ActionCreator } from "redux";

export interface INewCounter {
  type: string,
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

