import React, { useEffect, useState } from 'react';
import countdown from 'countdown';

const CarbonCountdown = () => {
    const [time, setTime] = useState(() =>{
        return countdown( new Date(2028, 0, 2, countdown.SECONDS) );
    });

    useEffect(() =>{
        window.setInterval(()=> {
            setTime(() => {
                return countdown( new Date(2028, 0, 2, countdown.SECONDS))
            })
        }, 1000)
    }, [])

    let years = time.years
    let months = time.months
    let days = time.days
    let hours = time.hours
    let minutes = time.minutes
    let seconds = time.seconds
    
    return(
        <>
        <div id="countdown">
            <div className="time">
                <div className="units">
                <p>{years > 9 ? years : "0" + years}</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="units">
                <p> {months > 9 ? months : "0" + months}</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="units">
                <p> {days > 9 ? days : "0" + days}</p>
                </div>
            </div>
            <div className="time">
                <div className="units">
                <p>{hours > 9 ? hours : "0" + hours}</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="units">
                <p> {minutes > 9 ? minutes : "0" + minutes}</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="units">
                <p> {seconds > 9 ? seconds : "0" + seconds}</p>
                </div>
            </div>
        </div>
     </>
    )

}

export default CarbonCountdown;