import React, {useState, KeyboardEvent} from 'react'
import s from './Select.module.css'

export type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    item: ItemsType
    selectItems: ItemsType[]
    onChangeChoice: (selectItem: ItemsType) => void

}


export function Select(props: SelectPropsType) {
    const selectedItem = props.selectItems.find(i => i.value === props.item.value)


        return (
        <div className={s.select}>

         {/*   <select>
                <option value="">Moscow</option>
                <option value="">London</option>
                <option value="">Rome</option>
            </select>*/}

            <div className={s.title}>
                {selectedItem && selectedItem.title}
            </div>

            <div className={s.item}>
            {props.selectItems.map((i) => <div key={i.value}>{i.title}</div>)}
            </div>
        </div>

    )
}
