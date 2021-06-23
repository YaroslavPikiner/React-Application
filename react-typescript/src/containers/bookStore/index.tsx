import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { StoreCard, Basket } from '../../type';
import BookList from './components/booklist';

const BookStore: React.FC = () => {
  const [booksStore, setBooksStore] = useState([])
  useEffect(() => {
    fetch('https://5e4d442f9b6805001438fc21.mockapi.io/books/v1/cards/')
      .then(res => res.json())
      .then(res => setBooksStore(res.books))
  }, [])

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Book Store</h1>
      <BookList booksStore={booksStore} />
    </>
  )
}

export default BookStore;