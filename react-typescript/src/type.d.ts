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

export type ITimer = {
  time: {
    h: number
    m: number
    s: number
  }
  seconds: number
  laps: []
}

export type ITimeCurr = number

export type TodoState = {
  todos: ITodo[]
}

export type ChartState = {
  chart: IChart
}

export type ArticleState = {
  articles: IArticle[]
}

export type CounterState = {
  counter: ICounter
}




