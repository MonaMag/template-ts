import {ItemsType, MySelect, SelectPropsType} from "./MySelect";
import {action} from "@storybook/addon-actions";
import {Meta, Story} from "@storybook/react";
import React, {useMemo, useState} from "react";

export default {
    title: 'MySelect',
    component: MySelect,
} as Meta

/*
const callback = action("select mode change event fired");

const Template: Story<SelectPropsType> = (args) => <Select{...args} />;


export const SelectMode = Template.bind({})
SelectMode.args = {
    title: '',
    selectItems: [],
    onChange: callback
}
*/


const selectItems: ItemsType[] = [
    {title: 'Moscow', value: 1},
        {title: 'London', value: 2},
        {title: 'Rome', value: 3},
        {title: 'Madrid', value: 4},
        {title: 'Dublin', value: 4}
]

export const Controlled = () => {
    const [currentChoice, setCurrentChoice] = useState<ItemsType>({title: 'City', value: 'none'})
    return <MySelect item={currentChoice} selectItems={selectItems} onChange={setCurrentChoice}/>
}


/*

const callback = action("Select sending data")

const MemoSelect = React.memo(Select)

export const UseMemoSelectExample = () => {
    const [students, setStudents] = useState([
        {id: 1, name: 'Dimych', score: 980, lvl: 9},
        {id: 2, name: 'Valera', score: 410, lvl: 4},
        {id: 3, name: 'Artem', score: 525, lvl: 5},
        {id: 4, name: 'Sveta', score: 570, lvl: 5},
        {id: 5, name: 'Egor', score: 940, lvl: 9},
        {id: 6, name: 'Katya', score: 450, lvl: 4},
    ])
    console.log(students[students.length-1])
    const [options, setOptions] = useState([
        {title: 'JavaScript', value: 1},
        {title: 'Java', value: 2},
        {title: 'Python', value: 3},
        {title: 'C#', value: 4},
        {title: 'C++', value: 5},
    ])

    const [count, setCount] = useState(0)

    const [filter1, filter2, filter3] = useMemo(() => {
        const filter1 = students.filter(st => st.score > 499).map(st => ({title: st.name, value: st.id}))
        const filter2 = students.filter(st => st.name.toLowerCase().indexOf('a') > -1).map(st => ({title: st.name, value: st.id}))
        const filter3 = students.filter(st => st.lvl < 5).map(st => ({title: st.name, value: st.id}))
        return [filter1, filter2, filter3]
    }, [students])

    const filter4 = useMemo(() => options.filter(op => op.title.toLowerCase().indexOf('j') > -1), [options])

    const addStudent = () => {
        setStudents([...students, {
            id: students.length+1,
            name: 'Sveta '+ (students.length+1),
            score: Math.floor(Math.random()*999) + 1,
            lvl: Math.floor(Math.random()*9) + 1,
        }])
    }

    const addTech = () => {
        setOptions([...options, {title: 'Jordin ' + (options.length+1), value: options.length + 1}])
    }

    return (
        <div>
            <MemoSelect title={filter1[0]} selectItems={filter1} onChange={callback} ></MemoSelect>
            <MemoSelect title={filter2[0]} selectItems={filter2} onChange={callback} ></MemoSelect>
            <MemoSelect title={filter3[0]} selectItems={filter3} onChange={callback} ></MemoSelect>
            <MemoSelect title={filter4[0]} selectItems={filter4} onChange={callback} ></MemoSelect>
            <button onClick={addStudent}>add student</button>
            <button onClick={addTech}>add technology</button>
            <button onClick={() => setCount(count + 1)} >+++</button>
            <div>{count}</div>
        </div>
    )
}
*/
