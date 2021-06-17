import * as actionTypes from "./actionTypes"

const initialArticleState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
    counter: 0
}

const reducer = (
    state: ArticleState = initialArticleState,
    action: ArticleAction
): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(), // not really unique
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                (article: { id: any }) => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles,
            }
        case actionTypes.INCREMENT: {
            const newCount = state.counter + 1
            return { ...state, counter: newCount }
        }
        case actionTypes.DECREMENT: {
            const newCount = state.counter - 1
            return { ...state, counter: newCount }
        }
    }
    return state
}

export default reducer