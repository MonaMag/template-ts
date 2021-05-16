import React, {useState, KeyboardEvent} from 'react'
import s from './MySelect.module.css'

export type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    title: any
    selectItems: ItemsType[]
    onChange: (selectItems: ItemsType) => void
}


export function MySelect(props: SelectPropsType) {
    console.log('Select Rendering')

    const [collapsed, setCollapsed] = useState(true);

    function onSelectItemClick(value: any, title: string) {
        props.onChange({title: title, value: value})
    }

    function onKeyPressInTitle(e: KeyboardEvent<HTMLDivElement>) {
        if (e.keyCode === 40) {
            if (props.title.value === 'none') {
                props.onChange(props.selectItems[0])
                return
            }
            for (let i = 0; i < props.selectItems.length; i++) {
                if (props.selectItems[i].title === props.title.title && i !== props.selectItems.length - 1) {
                    props.onChange(props.selectItems[i + 1])
                    return
                }
            }
        } else if (e.keyCode === 38) {
            for (let i = 0; i < props.selectItems.length; i++) {
                if (props.selectItems[i].title === props.title.title && i !== 0) {
                    props.onChange(props.selectItems[i - 1])
                    return
                }
            }
        }
        if (e.keyCode === 13 || e.keyCode === 27) {
            e.keyCode === 13 ?  setCollapsed(!collapsed) :  setCollapsed(true)
        }
    }

    function onTitleBlurEffect() {
        setTimeout(() =>  setCollapsed(true), 200)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}
                 onClick={() => setCollapsed(!collapsed)}
                 onBlur={onTitleBlurEffect}
                 onKeyDown={onKeyPressInTitle}
                 tabIndex={0}>
                {props.title.title}
                <div className={s.tick}/>
            </div>
            {!collapsed && <ul>
                {props.selectItems.map((op, index) => <li
                    className={s.li + ' ' + (op.title === props.title.title ? s.active : '')}
                    onClick={() =>  onSelectItemClick(op.value, op.title)}
                    key={index}>{op.title}</li>)}
            </ul>}

        </div>

    )
}
