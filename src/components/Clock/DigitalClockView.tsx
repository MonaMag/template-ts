import React from "react";
import {ClockViewPropsType } from './Clock';
import s from './Clock.module.css'


export const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num;

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <div className={s.wrapper}>
    <div className={s.digitalClock}>
      {getTwoDigitsString(date.getHours())}:{getTwoDigitsString(date.getMinutes())}:{getTwoDigitsString(date.getSeconds())}
    </div>
    </div>
}

