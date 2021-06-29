import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IArticle } from '../../type';


type Props = {
  saveArticle: (article: IArticle | any) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 600,
      margin: '0 auto',
      paddingBlockEnd: '50px'
    },
  }),
);

const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>()
  const classes = useStyles();
  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className={classes.root}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <Button type='submit' variant="contained" color="primary" disabled={article === undefined ? true : false}>
        Add article
      </Button>
    </form>
  )
}

export default AddArticle;