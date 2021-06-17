import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { IArticle } from "../../type";

type Props = {
    article: IArticle
    removeArticle: (article: IArticle) => void
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardContent: {
        width: 600,
        margin: 10,
    }
});

const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
};

const Article: React.FC<Props> = ({ article, removeArticle }) => {
    const classes = useStyles();
    const dispatch: Dispatch<any> = useDispatch()

    const deleteArticle = React.useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    )

    return (
        <motion.div initial="hidden" animate="visible" variants={item}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h1" component="h2" className={classes.title} color="textSecondary" gutterBottom>
                        {article.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {article.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" onClick={() => deleteArticle(article)} >Delete</Button>
                </CardActions>
            </Card>
        </motion.div>
    )
}

export default Article