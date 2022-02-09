import React from 'react'
import aboutimage from '../images/hero.png';

function About() {
    return (
        <div className="about">
            <div className="about-model">
                <img src={aboutimage} alt="About Image" />
            </div>
            <div className="about-text">
                <h2> We Are The Best <br /> Real Estate Company </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id, quidem harum itaque quisquam optio. Minus animi vel nisi sint reiciendis veniam deleniti explicabo! Iusto, distinctio! Sit, suscipit, deserunt aliquid recusandae accusantium obcaecati pariatur voluptates ipsam hic, a corrupti explicabo? </p>
                <button> View More Details </button>
            </div>
        </div>
    )
}

export default About
