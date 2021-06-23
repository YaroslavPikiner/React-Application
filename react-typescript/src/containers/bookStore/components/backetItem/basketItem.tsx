import React, {useState} from 'react';
import './backetItem.css';

const BasketItem:React.FC = () => {
    return (
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
    )
}


export default BasketItem