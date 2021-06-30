import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { motion } from "framer-motion"
import Article from '../articles/Article';
import AddArticle from "./AddArticle";
import { addArticle, removeArticle } from "../../redux/article/articleCreators";
import { Dispatch } from "redux"
import { IArticle } from "../../type";
import { IAppState } from "../../redux/reducers/rootReducer";


const MainArticle: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
        (state: IAppState) => state.articleReducer.articles,
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveArticle = React.useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
    )

    return (
        <main>
            <h1>My Articles</h1>
            <motion.div
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <AddArticle saveArticle={saveArticle} />
                {articles.map((article: IArticle) => (
                    <Article
                        key={article.id}
                        article={article}
                        removeArticle={removeArticle}
                    />
                ))}
            </motion.div>
        </main>
    )
}

export default MainArticle