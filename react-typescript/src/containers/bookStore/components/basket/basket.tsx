import React, { useState, useEffect } from 'react';
import { StoreCard } from '../../../../type';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import BasketItem from '../backetItem/basketItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../../../redux/reducers/rootReducer';
import './basket.css';

const Basket: React.FC = () => {
    const basketStore = useSelector((state: IAppState) => state.bookStoreReducer.offers)

    const totalPrice = basketStore.reduce((a, b) => a.price + b.price)

    return (
        <>
            <div className='basket__wrapper'>
                <Link to='/books'>
                    <div className='btn__back'>
                        <Button variant="contained" size="medium" color="primary" > <ArrowBackIcon />Back to product</Button>
                    </div>
                </Link>
                <div className="basket">
                    <ul className="basket__list">
                        <li className='basket__item--wrapper'>
                            {
                                basketStore.length ?
                                    basketStore.map((item: any) => {
                                        return <BasketItem key={item.id} item={item} />;
                                    })
                                    : <p>Loading...</p>

                            }
                        </li>
                    </ul>
                    <div className="backet__price">
                        <p> Total Price: {totalPrice}</p>
                        <Button variant="contained" size="medium" color="primary" > <ShoppingCartIcon /><Link to={`/order`}>Buy now</Link></Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Basket;