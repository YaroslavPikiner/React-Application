export interface IArticle {
  id: number
  title: string
  body: string
}
export type ICounter = number

export type ITodo = {
  id: number,
  title: string,
  isCompleted: boolean
}

export type ArticleState = {
  articles: IArticle[]
}

export type CounterState = {
  counter: ICounter
}



export type DispatchType = (args: ArticleAction | CounterAction) => ArticleAction | CounterAction
