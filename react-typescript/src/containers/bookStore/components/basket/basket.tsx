import React, { useState, useEffect } from 'react';
import { StoreCard } from '../../../../type';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import BasketItem from '../backetItem/basketItem';

import './basket.css';

type Prop = {
    booksStore: StoreCard[];
}


const Basket: React.FC<Prop> = ({ booksStore }) => {

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
                           <BasketItem/>
                           
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Basket;