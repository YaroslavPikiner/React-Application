import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import './bookCard.css'
import Button from '@material-ui/core/Button';
import { StoreCard } from '../../../type';

const BookCard: React.FC = () => {
    const [book, setBook] = useState<any>({});
    const [count, setCount] = useState<number>(0);
    let history = useHistory();
    let loc = useLocation();


    useEffect(() => {
        fetch(`https://5e4d442f9b6805001438fc21.mockapi.io/books/v1/cards/${loc.pathname.slice(8)}`)
            .then((response) => response.json())
            .then((data) => setBook(data.books))
            .catch((error) => console.log(error.message));

    }, []);

    console.log(book);

    const back = () => {
        history.push('/books')
    }


    const removeToBackedHandle = () => {
        setBook({
            ...book, amountInStock: book.amountInStock + 1
        })
        setCount(count - 1)
        
    }


    const addToBacketHandle = () => {
        setBook({
            ...book, amountInStock: book.amountInStock - 1
        })
        setCount(count + 1)
    }


    return (
        <>
            <div className="wrapper">
                <div className="card__appbar">
                    <Button onClick={back} variant="outlined" size="medium" color="primary" >Back to product</Button>
                </div>
                <div className="card">
                    <div className="card__image">
                        <img className="image" src={book.img} alt="img" />
                    </div>
                    <div className="card__desctiption">
                        <div className="desctiption__title">
                            <h3 className="desctiption__title--book">{book.title}</h3>
                            <p className="desctiption__title--name">{book.author}</p>
                            {book.inStock ? <p className='inStock-success'>В наличии, осталось {book.amountInStock} штук</p> : <p className='inStock-fail'>Нету в наличии</p>}
                        </div>
                        <p className="description">{book.description}</p>
                        <div className="card__btns">
                            <Button variant="outlined" size="medium" color="primary" >Buy</Button>
                            <Button variant="outlined" size="medium" color="primary" >Add to basket</Button>
                            <div className="card__counter">
                                <Button onClick={addToBacketHandle} variant="outlined" size="medium" color="primary" >+</Button>
                                <span>{count}</span>
                                <Button onClick={removeToBackedHandle} variant="outlined" size="medium" color="primary" >-</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BookCard