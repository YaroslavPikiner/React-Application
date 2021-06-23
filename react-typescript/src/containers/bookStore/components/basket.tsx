import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { StoreCard } from '../../../type';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'


import './basket.css';

type Prop = {
    booksStore: StoreCard[];
}


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

const Basket: React.FC<Prop> = ({ booksStore }) => {
    const classes = useStyles();

    return (
        <>
            <Link to='/books'>
                <div>
                    <Button variant="contained" size="medium" color="primary" > <ArrowBackIcon />Back to product</Button>
                </div>
            </Link>
            <div className='basket__wrapper'>
                <div className="basket">
                    <ul className="basket__list">
                        <li className='basket__item--wrapper'>
                            <div className='basket__item'>
                                <img className='basket__image' src="https://i.pinimg.com/originals/77/e4/93/77e493a31ae8c9915a98852d203416d6.jpg" alt="#" />
                                <div className="basket__item__description">
                                    <p className="basket__item--title">asdasd</p>
                                    <p className="basket__item--name">asdasda</p>
                                </div>
                                <p className='basket__item--amount'>Amount</p>
                                <p className='basket__item--price'>$Price</p>
                                <button className='basket__item--btn'>Remove</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Basket;