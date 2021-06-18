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

export interface IChart {
  id?: string;
  className?: string;
  height?: number;
  width?: number;
  redraw?: boolean;
  type: string;
  data: {
    labels: string[],
    datasets: IDatasets,
    options: {
      scales: {
        y: {
          beginAtZero: boolean
        }
      }
    }
  }
}

// interface IDatasets {
//   label: string;
//   data: number[];
//   backgroundColor: string[];
//   borderColor: string[];
//   borderWidth: number;
// }

