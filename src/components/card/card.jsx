import React from 'react';
import './card.css';

const Card = ({monster: {name, id, email}}) => (
        <div className = 'card-container'>
            <img className = 'card-container__img' src = {`https://robohash.org/${id}?set=set2`} alt='monster img'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )

export default Card

