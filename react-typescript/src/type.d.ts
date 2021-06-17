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

export type TodoState = {
  todos: ITodo[]
}

export type ArticleState = {
  articles: IArticle[]
}

export type CounterState = {
  counter: ICounter
}


