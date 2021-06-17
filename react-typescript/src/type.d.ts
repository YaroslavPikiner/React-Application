interface IArticle {
  id: number
  title: string
  body: string
}

interface ICounter {
  counter: number
}

type ArticleState = {
  articles: IArticle[]
  counter: number
}

type ArticleAction = {
  type: string
  article: IArticle
}

type CountAction = {
  type: string
  counter: ICounter
}

interface ITodo {
  title: string,
  id: number,
  isCompleted: boolean,
}

type DispatchType = (args: ArticleAction) => ArticleAction
type DispatchType = (args: CountAction) => CountAction
