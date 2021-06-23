import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { StoreCard } from '../../type';
import BookList from './components/bookList/booklist';
import Basket from './components/basket/basket';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      marginBottom: theme.spacing(6),
    },
  }),
);

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);


const BookStore: React.FC = () => {
  const classes = useStyles();
  const [booksStore, setBooksStore] = useState([])
  useEffect(() => {
    fetch('https://5e4d442f9b6805001438fc21.mockapi.io/books/v1/cards/')
      .then(res => res.json())
      .then(res => setBooksStore(res.books))
  }, [])

  return (
    <>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Book Store
          </Typography>
          <Link to="/backet">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Toolbar>

      </AppBar>
      <BookList booksStore={booksStore} />
    </>
  )
}

export default BookStore;