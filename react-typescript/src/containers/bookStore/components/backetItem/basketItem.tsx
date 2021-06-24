import React, { useState } from 'react';
import { StoreCard } from '../../../../type';
import './backetItem.css';

type Prop = {
    item: StoreCard
}

const BasketItem: React.FC<Prop> = ({item}) => {
    return (
        <div className='basket__item'>
            <img className='basket__image' src="https://i.pinimg.com/originals/77/e4/93/77e493a31ae8c9915a98852d203416d6.jpg" alt="#" />
            <div className="basket__item__description">
                <p className="basket__item--title">{item.title}</p>
                <p className="basket__item--name">{item.author}</p>
            </div>
            <p className='basket__item--amount'>{item.name}</p>
            <p className='basket__item--price'>${item.price}</p>
            <button className='basket__item--btn'>Remove</button>
        </div>
    )
}


export default BasketItem