import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import Article from '../articles/Article';
import AddArticle from "./AddArticle";
import { addArticle, removeArticle } from "../../redux/actionCreators";
import { Dispatch } from "redux"

const MainArticle: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveArticle = React.useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
    )

    return (
        <main>
            <h1>My Articles</h1>
            <AddArticle saveArticle={saveArticle} />
            {articles.map((article: IArticle) => (
                <Article
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle}
                />
            ))}
        </main>
    )
}

export default MainArticle