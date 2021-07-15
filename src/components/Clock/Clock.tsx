import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'
import {AnalogClockView} from './AnalogClockView';
import {DigitalClockView} from './DigitalClockView';


export type ClockPropsType = {
    mode?: 'analog' | 'digital'
}

export type ClockViewPropsType = {
    date: Date
}


export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('TICK');
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>

    }
    return <div>
        {view}
    </div>
}



