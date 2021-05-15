import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

//здесь конфигурируется история
export default {
  title: 'Accordion',
  component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action('some item was clicked')

//Template функция, которая нарисует Accordion с какими-то аргументами args, которые к нам могут прийти, это пропсы,крторые мы перекидываем внутрь компоненты, то есть берем нашу компоненту и в нее раскукоживаем наши пропсы args

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
//типизацию задаем самому Template, это Story<Тип>
//теперь наши истории будем создавать на основе этого Template шаблона

//each story then reuses that template
//bind это классическая JS  функция, которая  создает копию функции с забиндженим контекстом
// Template.bind({}) это нужно чтобы меньше писать кода, буковок, чтобы удобнее писать и организовывать пропсы, котрые разные приходят в одну и ту же компоненту, чтоб удобнее было переиспользовать и придумали шаблон

const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

//Теперь берем переменную и коипируем туда нашу функцию Template, вызываем у нее функцию bind и таким образом получаем копию
export const MenuCollapsedMode = Template.bind({})
//но где возьмем аргументы, а они описываются дальше
//присобачиваем эти аргументы к названию функции(функция это объект) как как свойства функции, далее storybook обратиться к этому свойству и возьмет этот объект, воспринимать будет его как пропсы и закинеть их в args, а затем раскукожить в нашу компоненту
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: true,
    items: []
}

export const UserCollapsedMode = Template.bind({})
UserCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "User",
    collapsed: false,
    items: [{title: 'Hanna', value: 1}, {title: 'Mona', value: 2}, {title: 'Sasha', value: 3}, {title: 'Kira', value: 4}]
}

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);

  return <Accordion titleValue={"User"} collapsed={value} onChange={ () => setValue(!value)}
                    items={[
                        {title: 'Hanna', value: 1},
                        {title: 'Mona', value: 2},
                        {title: 'Sasha', value: 3},
                        {title: 'Kira', value: 4}
                    ]}
                    onClick={(value) => {
                        alert(`user with ID ${value} should be happy`)
                    }}
  />
}


