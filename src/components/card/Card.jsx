import React, { useState, useEffect } from 'react';
import { fetchData } from '../../utils/fetch';

//CSS
import './card.css'

function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const dataJson = await fetchData();
            setData(dataJson);
        };
        getData();
    }, []);

    return (
        <div className='lodges'>
            {data.map((item, index) => (
                <a href={'/logement/' + item.id} className='card' key={index}>
                    <img src={item.cover} alt="image de la carte" className='card__cover'/>
                    <div className='card__overlay'></div>
                    <p className='card__title'> {item.title} </p>
                </a>
            ))}
        </div>
    )
}

export default Card;