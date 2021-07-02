import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react";

export default {
    title: 'useState demo'

} as Meta

function generateData() {
    //difficult counting
    console.log('generateData')
    return 1;
}


export const Example = () => {
    console.log('Example')

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </>
}