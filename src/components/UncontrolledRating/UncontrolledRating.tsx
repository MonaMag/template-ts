import React, {useState} from 'react';

type RatingPropsType = {}

function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating rendering")
  let [value, setValue] = useState(0);
  return (
    <div>
      {/*закидываем функцию setValue в Star как callback, в качестве атрибута как и selected, и она  становится свойством props для компоненты <Star /> */}
      {/*также в пропсах закидываем и значения value, которая указывает на значпение за которое эта звездочка отвечает*/}
      <Star selected={value > 0} setValue={() => {setValue(1)}}/>
      <Star selected={value > 1} setValue={() => {setValue(2)}}/>
      <Star selected={value > 2} setValue={() => {setValue(3)}}/>
      <Star selected={value > 3} setValue={() => {setValue(4)}}/>
      <Star selected={value > 4} setValue={() => {setValue(5)}}/>
    </div>
  );
}

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

{/*теперь в пропсах у нас есть кроме значения selected еще и функция setValue, которую можно вызвать
вызываем фун setValue в Star, хотим кликать на звездочку и чтоб она вызывалась*/
}

function Star(props: StarPropsType) {
  return <span onClick={() => {
    props.setValue()
  }}>
    {props.selected ? <b>star </b> : 'star '}
  </span>

}

export default UncontrolledRating;


