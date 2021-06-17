import { ArticleState, IArticle } from "../../type"
import { Action } from 'redux';
import { Reducer } from "react";
import * as actionTypes from "../actionTypes"
import { INewArticleAction } from "../actionCreators";

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
}



const articleReducer: Reducer<ArticleState, INewArticleAction> = (
    state = initialArticleState,
    action
): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(), // not really unique
                title: action.payload.title,
                body: action.payload.body,
            }
            console.log(newArticle, 'here')
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                (article: { id: number }) => article.id !== action.payload.id
            )
            return {
                ...state,
                articles: updatedArticles,
            }
    }
    return state
}

export default articleReducer
