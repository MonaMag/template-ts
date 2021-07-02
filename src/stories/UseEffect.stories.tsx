import React, {useEffect, useState} from "react";
import {Meta} from "@storybook/react";

export default {
    title: 'useEffect demo'
} as Meta


export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('SimpleExample');
        document.title = counter.toString();
        //api.getUsers().then('');
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    }, [counter])



    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

//сначала происходит отрисовка компоненты, потом только запускается useEffect !!!!

//Если мы не передали ничего в зависимости (вообще ничего), то useEffect запускается при каждом рендере компоненты
// если предаем конкретную зависимость - то он срабатывает первый раз и потом только при смнене зависимости (counter)
// если передали пустой массив [] - useEffect сработает ровно один раз при вмонтировании компоненты, при изменении компоненты он срабатывать не будет