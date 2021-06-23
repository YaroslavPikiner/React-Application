import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BookItem from './bookItem';
import Box from '@material-ui/core/Box';
import { StoreCard } from '../../../type';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            height: 340,
            width: 800,
        },
        control: {
            margin: 40
        },
    }),
);

type Prop = {
    booksStore: StoreCard[];
}

const BookList: React.FC<Prop> = ({ booksStore }) => {
    const [list, setList] = useState(5);
    const classes = useStyles();

    return (
        <>
            <div >
                <ul>
                    {booksStore ? booksStore.slice(0, list).map(item => <BookItem item={item} key={item.id} />) : <p>Loading...</p>}
                </ul>
                <Box textAlign='center'>
                    <Button className={classes.control} onClick={() => setList(list => list + 5)} variant="contained" > Show more </Button>
                </Box>

            </div>
        </>
    )
}

export default BookList;