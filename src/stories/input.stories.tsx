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



export const ControlledInput = () => {
    //заставляем компоненту перерисоваться, благодаря использованию локального стейта
    const [parentValue, setParentValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue((e.currentTarget.value))
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
};



export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option value={1}>Moscow</option>
        <option value={2}>Minsk</option>
        <option value={3}>Kiev</option>
    </select>
}


