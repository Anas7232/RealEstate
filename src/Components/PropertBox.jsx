import React from 'react'

function PropertBox(props) {
    return (
        <div className="p-box">
            <img src={props.image} alt="Product" />
            <p> {props.name} </p>
            <a href="#" className="price"> {props.price} </a>
            <a href="#" className="buy-btn"> Add To Cart </a>
        </div>
    )
}

export default PropertBox
