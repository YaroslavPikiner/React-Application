import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromBasket } from '../../../../redux/bookStore/bookStoreACreator';
import { StoreCard } from '../../../../type';
import './backetItem.css';
type Prop = {
    item: StoreCard
}

const BasketItem: React.FC<Prop> = ({ item }) => {
    const dispatch = useDispatch();

    const removeItem = (id: string | number) => {
        dispatch(removeItemFromBasket(id));
    }

    return (
        <>
            <div className='basket__item'>
                <img className='basket__image' src={item.img} alt="#" />
                <div className="basket__item__description">
                    <p className="basket__item--title">{item.title}</p>
                    <p className="basket__item--name">{item.author}</p>
                </div>
                <p className='basket__item--amount'>{item.name}</p>
                <p className='basket__item--price'>${item.price}</p>
                <button className='basket__item--btn' onClick={() => removeItem(item.id)}>Remove</button>
            </div>
        </>
    )
}

export default BasketItem