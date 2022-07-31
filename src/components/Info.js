import React from 'react';
import Chart from './Chart';

const Info = () => {
    return(
        <div className="info">
            <h1 className="info__title">Spending - Last 7 days</h1>
            <div className="expenses">
                <Chart />
            </div>
            <div className="total">
                <div className="this-month">
                    <h2 className="this-month__text">Total this month</h2>
                    <h1 className="this-month__value">$478.33</h1>
                </div>
                <div className="last-month">
                    <br/>
                    <h2 className="last-month__percentage">+2.4%</h2>
                    <h2 className="last-month__text">from last month</h2>
                </div>
            </div>
        </div>
    )
}

export default Info;