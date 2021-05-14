import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import OnOff from "./components/OnOff/OnOff";



function App() {
  console.log("App rendering")

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState(false);

  // const changeAccordion = () => {
  //   setAccordionCollapsed(!accordionCollapsed)
  // }

  return (
    <div className={'App'}>

      <UncontrolledRating/>
      <Rating value={ratingValue} onClick={setRatingValue}/>

      <UncontrolledAccordion titleValue={"Menu"}/>
      <Accordion titleValue={"Menu"}
                 collapsed={accordionCollapsed}
                 onChange={ () => {setAccordionCollapsed(!accordionCollapsed)}}/>

      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
      <OnOff on={switchOn} onChange={ setSwitchOn }/>

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


