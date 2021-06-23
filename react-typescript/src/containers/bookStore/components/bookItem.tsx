import React, { useState } from "react";
import { StoreCard } from '../../../type';
import { useHistory } from "react-router-dom";
import '../index.css';

type Prop = {
    item: StoreCard
}

const Button: React.FC<Prop> = ({ item }) => {
    let history = useHistory();
    const pushToCurrBook = (id: string | number) => {
        history.push(`/books/:${id}`);
    }

    return (
        <button className="button button-primary" onClick={() => pushToCurrBook(item.id)}>
            <i className="fa fa-chevron-right"></i> Подробнее
        </button>
    )
}

const CardHeader: React.FC<Prop> = ({ item }) => {
    return (
        <header className="card-header" >
            <h4 className="card-header--title">{item.author}</h4>
        </header>
    )
}


const CardBody: React.FC<Prop> = ({ item }) => {
    return (
        <div className="card-body">
            <p className="date">March 20 2015</p>

            <h2>{item.title}</h2>

            <p className="body-content">{item.description}</p>
            <Button item={item} />
        </div>
    )
}

const BookItem: React.FC<Prop> = ({ item }) => {

    return (
        <>
            <div className="app-card-list" >
                <article className="card" >
                    <CardHeader item={item} />
                    <img src={item.img} alt={item.title} />
                    <CardBody item={item} />
                </article>
            </div>
        </>
    );
}

export default BookItem;
