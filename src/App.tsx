import React, {useState} from 'react';
import './App.css';
import {Accordion, ItemsType} from './components/Accordion/Accordion';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {MySelect} from "./components/MySelect/MySelect";
import {Select} from "./components/Select/Select";



function App() {
    console.log("App rendering")
    const accordionItems: Array<ItemsType> = [
        {title: 'Hanna', value: 1},
        {title: 'Mona', value: 2},
        {title: 'Sasha', value: 3},
        {title: 'Kira', value: 4},
    ]
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false);
    const onClick = (value: any) => alert(`user with ID ${value} should be happy`)

    // Select data, state and functions =========>
    const selectItems: ItemsType[] = [
        {title: 'Moscow', value: 1},
        {title: 'London', value: 2},
        {title: 'Rome', value: 3},
        {title: 'Madrid', value: 4},
        {title: 'Dublin', value: 4},
    ]
    const [chosenItem, setChosenItem] = useState({title: 'City', value: 'none'});
    const onChangeSelectedItem = (selectItem: ItemsType) => {
        alert(`selected ${selectItem.title} with value id ${selectItem.value}`)
        setChosenItem(selectItem);
    }
    // ============================================>


    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={accordionItems} onClick={onClick}/>
            <MySelect item={chosenItem} selectItems={selectItems} onChange={onChangeSelectedItem}/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating onChange={setRatingValue}/>

            <Select item={chosenItem} selectItems={selectItems} onChangeChoice={onChangeSelectedItem}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;


