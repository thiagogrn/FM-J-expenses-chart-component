import React from 'react';
import logo from '../images/logo.svg'

const Balance = () => {
    return (
        <div className="balance">
            <div className="text">
                <h3 className="text__title">My balance</h3>
                <h1 className="text__value">$921.48</h1>
            </div>
            <img className="logo" src={logo} alt="logo"/>
        </div>
    )
}

export default Balance;