import React, { useState, useEffect } from 'react';
import { StoreCard } from '../../../../type';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import BasketItem from '../backetItem/basketItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../../../redux/reducers/rootReducer';
import Loader from "react-loader-spinner";
import './basket.css';

const Basket: React.FC = () => {
    const basketStore = useSelector((state: IAppState) => state.bookStoreReducer.offers)
    const basketPrice = basketStore.map((item: any) => item.price)

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
                                basketStore ?
                                    basketStore.map((item: any) => item ? <BasketItem key={item.id} item={item} /> : <p>Basket is empty</p>)
                                    : <Loader
                                        type="Bars"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        timeout={3000} //3 secs
                                    />
                            }
                        </li>
                    </ul>
                    <div className="backet__price">
                        <p> Total Price: ${basketPrice ? basketPrice.reduce((prev, curr) => {
                            return prev + curr
                        },0) : 0}</p>
                        <Button variant="contained" size="medium" color="primary" > <ShoppingCartIcon /><Link to={`/order`}>Buy now</Link></Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Basket;