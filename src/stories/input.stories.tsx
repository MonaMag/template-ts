import React, {ChangeEvent, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';


export default {
    title: 'Studying/Input ',
    //component: input,
} as Meta;


export const UncontrolledInput = () => <input/>;
export const FixedValueInput = () => <input value={'it-incubator.by'}/>;

//получаем значение input с помощью объекта событий event,
//сохраняя актуальное значение в локальный стейт
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <><input onChange={onChangeInput}/> - {value}</>
}

//берем значение из input через ссылки, с помощью хука useRef
// создаем  ссылку и привязываем через ref к нужному элементу
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const saveInputValue = () => {
        const el = inputRef.current as HTMLInputElement;
        setInputValue(el.value);
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={saveInputValue}>save</button>
        - actual value - {inputValue}
    </>
}



