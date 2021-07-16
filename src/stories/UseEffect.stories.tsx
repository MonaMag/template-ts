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
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

//сначала происходит отрисовка компоненты, потом только запускается useEffect !!!!

//Если мы не передали ничего в зависимости (вообще ничего), то useEffect запускается при каждом рендере компоненты
// если предаем конкретную зависимость - то он срабатывает первый раз и потом только при смнене зависимости (counter)
// если передали пустой массив [] - useEffect сработает ровно один раз при вмонтировании компоненты, при изменении компоненты он срабатывать не будет


export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(0);

    console.log('SetTimeoutExample');

    useEffect(() => {
        const intervalID = setTimeout(() => {
            console.log('setTimout')
            document.title = counter.toString();
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }

    }, [counter])


    useEffect(() => {
        setInterval(() => {
            console.log('tick:' + counter);
            setCounter((state) => state + 1);
        }, 1000);

    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log('Component rendered' + counter);

    useEffect(() => {
        console.log('Effect oc curred')

        return () => {
            console.log('RESET EFFECT')
        }
    }, [])


    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}


export const KeysTrackerExample = () => {

    const [text, setText] = useState('');
    console.log('Component rendered' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        };

        window.document.addEventListener('keypress', handler);
        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered' + text);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutID);
        }
    }, [text])

    return <>
        text: {text}
    </>
}