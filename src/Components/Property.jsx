import React from 'react';
import PropertBox from './PropertBox';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';

function Property() {
    return (
        <div className="product">
            <div className="p-heading">
                <h3> Properties </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, obcaecati.</p>
            </div>

            <div className="product-container">
                <PropertBox image={pimage1} name="Al-Musalah" price="246,998" />
                <PropertBox image={pimage2} name="Al-Hafza" price="246,398" />
                <PropertBox image={pimage3} name="Al-Bahra" price="246,998" />
            </div>
        </div>
    )
}

export default Property
