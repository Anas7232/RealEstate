import React from 'react';
import AgentBox from './AgentBox';
import agentimage1 from '../images/s1.png';
import agentimage2 from '../images/s2.png';
import agentimage3 from '../images/s3.png';

function Agent() {
    return (
        <div className="agent">
            <div className="a-heading">
                <h1> Agents </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, obcaecati.</p>
            </div>
            <div className="b-container">
                <AgentBox image={agentimage1} name="Hamza" />
                <AgentBox image={agentimage2} name="Hanzala" />
                <AgentBox image={agentimage3} name="Hashim" />
            </div>
        </div>
    )
}

export default Agent
