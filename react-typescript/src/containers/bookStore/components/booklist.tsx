import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BookItem from './bookItem';
import Box from '@material-ui/core/Box';
import { StoreCard } from '../../../type';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            height: 340,
            width: 800,
        },
        control: {
            margin: 40
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
    }),
);

type Prop = {
    booksStore: StoreCard[];
}

const BookList: React.FC<Prop> = ({ booksStore }) => {
    const [list, setList] = useState(6);
    const classes = useStyles();

    return (
        <>
            <div >
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {booksStore ? booksStore.slice(0, list).map(item => <BookItem item={item} key={item.id} />) : <p>Loading...</p>}
                    </Grid>
                </Container>

                <Box textAlign='center'>
                    <Button className={classes.control} onClick={() => setList(list => list + 6)} variant="contained" > Show more </Button>
                </Box>

            </div>
        </>
    )
}

export default BookList;