import {Meta, } from '@storybook/react';
import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
} as Meta

export const BaseAnalogExample = () => {
    //const [data, setData] = useState(new Date());
    return <Clock mode={'analog'}/>
}

export const BaseDigitalExample = () => {
    //const [data, setData] = useState(new Date());
    return <Clock mode={'digital'}/>
}