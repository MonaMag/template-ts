import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

export type PropsType = {

}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate]=useState(new Date());

    useEffect( () => {
       const intervalID = setInterval( () => {
            console.log('TICK');
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);


    // const secondsString = date.getSeconds() <10
    // ? '0' + date.getSeconds()
    // : date.getSeconds();

    return <div className={s.wrapper}>
        <div className={s.clock}>
        <span>{ get2digitsString (date.getHours()) }</span>
        :
            <span>{get2digitsString (date.getMinutes())}</span>
        :
            <span>{get2digitsString (date.getSeconds())}</span>
        </div>
    </div>
}