import React from 'react';
import background from "../../assets/bg_home.png"

//CSS
import './home.css'

//components
import Card from "../../components/card/Card"

function Home() {
    return (
        <div className="main">
            <div className='banner'>
                <div className="banner__overlay">
                    <p className='banner__title'>Chez vous, partout et ailleurs</p>
                </div>
                <img src={background} alt="falaises" className="banner_img"></img>
            </div>
            <div className="lodging">
                <Card />
            </div>
        </div>
    )
}

export default Home;
