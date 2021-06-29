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

export type ChartState = {
  chart: IChart
}

export type ArticleState = {
  articles: IArticle[]
}

export type CounterState = {
  counter: ICounter
}


export type StoreCard = {
  id: number | string;
  name?: stirng;
  avatar?: string;
  createdAt?: string;
  title: string;
  description: string;
  author: string;
  date: string | number;
  price: string | number;
  amountInStock: number;
  inStock: boolean;
  bestseller: boolean;
  img: string;
}

export type Basket = {
  offers: StoreCard[]
}

export type StoreCardState = {
  storeCards: StoreCard[],
  offers: Basket[]
}