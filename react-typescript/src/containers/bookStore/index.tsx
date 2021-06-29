import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import BookList from './components/bookList/booklist';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import { loadNotes } from '../../redux/bookStore/bookStoreACreator';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../redux/reducers/rootReducer';
import { Dispatch } from "redux"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      marginBottom: theme.spacing(6),
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-around'
    }
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
  const booksStore = useSelector((state: IAppState) => state.bookStoreReducer.storeCards)
  const basketStore = useSelector((state: IAppState) => state.bookStoreReducer.offers)

  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(loadNotes())
  }, [])

  return (
    <>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" color="inherit" noWrap>
            Book Store
          </Typography>
          <Link to="/backet">
            <IconButton edge="end" aria-label="cart">
              <StyledBadge badgeContent={basketStore.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      {
        booksStore.length ? <BookList booksStore={booksStore} /> : null
      }
    </>
  )
}

export default BookStore;