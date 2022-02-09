import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <Navbar />
            <div className="intro">
                <p> Looking For A Property </p>
                <h1> <span>Buy</span> And <span> Sell </span> Properties </h1>
                <p className="details"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus natus dolor numquam ut! Nulla quia harum quasi voluptatem ipsum officiis veritatis placeat sit perferendis? </p>
                <a href="#" className="header-btn"> Details </a>
            </div>
        </div>
    )
}

export default Header
