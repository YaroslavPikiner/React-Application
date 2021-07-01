import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from "react-router-dom";
import './bookCard.css'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { AddCardToBasket, removeItemFromBasket } from '../../../../redux/bookStore/bookStoreACreator';
import { StoreCard } from '../../../../type';
import { IAppState } from '../../../../redux/reducers/rootReducer';


const BookCard: React.FC = () => {
    const [book, setBook] = useState<any>({});
    const [count, setCount] = useState<number>(0);
    const [isDisableAdd, setIsDisableAdd] = useState<boolean>(false);
    const [isDisableRemove, setIsDisableRemove] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const basketStore = useSelector((state: IAppState) => state.bookStoreReducer.offers)
    const basketStoreId = basketStore.map((item: any) => item.id)


    let history = useHistory();
    let loc = useLocation();


    const addOrder = (item: StoreCard) => {
        dispatch(AddCardToBasket(item));
    }

    useEffect(() => {
        fetch(`https://5e4d442f9b6805001438fc21.mockapi.io/books/v1/cards/${loc.pathname.slice(8)}`)
            .then((response) => response.json())
            .then((data) => setBook(data.books))
            .catch((error) => console.log(error.message));

    }, []);

    const handleClick = (item: StoreCard) => {
        if (basketStoreId.includes(item.id)) {
            dispatch(removeItemFromBasket(item.id));
        } else {
            dispatch(AddCardToBasket(item))
            setOpen(true)
        }
    }

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const back = () => {
        history.push('/books')
    }

    const removeToBackedHandle = () => {
        if (count === 1) {
            setIsDisableRemove(true)
        }
        setIsDisableAdd(false)
        setBook({
            ...book, amountInStock: book.amountInStock + 1
        })
        setCount(count - 1)
    }

    const addToBacketHandle = () => {
        if (count > 19) {
            setIsDisableAdd(true)
        } else {
            setIsDisableRemove(false)
            setBook({
                ...book, amountInStock: book.amountInStock - 1
            })
            setCount(count + 1)
        }
    }



    return (
        <>
            <div className="wrapper">
                <div className="card__appbar">
                    <Button onClick={back} variant="contained" size="medium" color="primary" > <ArrowBackIcon />Back to product</Button>
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
                            <Button variant="contained" size="medium" color="primary" onClick={() => addOrder(book)}> <ShoppingCartIcon /><Link to={`/order`}>Купить</Link></Button>
                            <Button variant="contained" size="medium" color="primary" onClick={() => handleClick(book)}> {basketStoreId.includes(book.id) ? 'Удалить' : `Добавить в корзину`}</Button>
                            <div className="card__counter">
                                <Button onClick={addToBacketHandle} variant="contained" size="small" color="primary" disabled={isDisableAdd} ><AddIcon /></Button>
                                <Typography gutterBottom variant="h5" component="h2">{count}</Typography>
                                <Button onClick={removeToBackedHandle} variant="contained" size="small" color="secondary" disabled={isDisableRemove} ><RemoveIcon /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={basketStoreId.includes(book.id) ? "Added to basket" : "Removed from basket" }
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                <Link to='/order'>
                                    To order
                                </Link>
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        </>
    )
}


export default BookCard