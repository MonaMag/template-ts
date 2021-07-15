import {Meta, } from "@storybook/react";
import React, {useEffect, useState} from "react";
import {Clock, PropsType} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
} as Meta

export const BaseExample = () => {
    //const [data, setData] = useState(new Date());


    return <Clock />
}