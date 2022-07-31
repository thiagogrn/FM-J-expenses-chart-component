import React, { useEffect, useState } from 'react';
import data from '../data.json';

const Chart = () => {
    const [charBars, setCharBars] = useState([])

    useEffect(()=>{
        setCharBars(data.map(bar => ({...bar, showModal: false})))
    }, [])

    function getValues(arr) {
        const newArray = [];
        arr.map( item => {
            newArray.push(item.amount)
        });
        return newArray;
    }
    
    const max = Math.max(...getValues(charBars))

    function handleMouseEnter(e) {
        setCharBars(prevState => prevState.map(bar => {
            if (e.target.id === bar.day) {
                return (
                    {
                        ...bar,
                        showModal: true
                    }
                )
            } else {
                return (bar)
            }
        }))
    }

    function handleMouseLeave(e) {
        setCharBars(prevState => prevState.map(bar => {
            if (e.target.id === bar.day) {
                return (
                    {
                        ...bar,
                        showModal: false
                    }
                )
            } else {
                return (bar)
            }
        }))
    }

    return (
        <div className="chart-container">
            { charBars.map( bar => {
                const styles = 
                {
                    height:`${bar.amount / 3.5}em`, 
                }
                return (
                    <div key={bar.day} className="bar">
                        <div className={bar.showModal ? "modal" : "modal modal--disabled"}>
                            ${bar.amount}
                        </div>
                        <div 
                            style={styles} 
                            className={bar.amount === max ? "max-value" : "normal-value"}
                            id = {bar.day}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                        </div>
                        <p className="bar__day">{bar.day}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Chart;