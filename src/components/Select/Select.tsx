import React, {useState, KeyboardEvent} from 'react'
import s from './Select.module.css'

export type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (selectItems: ItemsType) => void
    selectItems: ItemsType[]
}


export function Select(props: SelectPropsType) {
    const selectedItem = props.selectItems.find(i => i.value === props.value)


        return (
        <div className={s.select}>

            <select>
                <option value="">Moscow</option>
                <option value="">London</option>
                <option value="">Rome</option>
            </select>

            <div className={s.title}>
                {selectedItem && selectedItem.title}
            </div>

            <div className={s.item}>
            {props.selectItems.map((i) => <div key={i.value}>{i.title}</div>)}
            </div>
        </div>

    )
}
