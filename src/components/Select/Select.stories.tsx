import {ItemsType, Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";
import {Meta, Story} from "@storybook/react";
import React, {useMemo, useState} from "react";

export default {
    title: 'Select',
    component: Select,
} as Meta


/*

const callback = action("select mode change event fired");

const Template: Story<SelectPropsType> = (args) => <Select{...args} />;


export const SelectMode = Template.bind({})
SelectMode.args = {
    value: '',
    selectItems: [],
    onChange: callback
}
*/

export const WithValue = () =>
    <>
        <Select onChangeChoice={action('Value changed')}
                selectItems={[
                    {title: 'Moscow', value: 1},
                    {title: 'London', value: 2},
                    {title: 'Rome', value: 3},
                    {title: 'Madrid', value: 4},
                    {title: 'Dublin', value: 5}
                ]}
                item={{title: 'Kiev', value: 6}}/>
    </>


export const WithoutValue = () =>
    <>
        <Select onChangeChoice={action('Value changed')}
                item={{title: 'Kiev', value: 6}}
                selectItems={[
                    {title: 'Moscow', value: 1},
                    {title: 'London', value: 2},
                    {title: 'Rome', value: 3},
                    {title: 'Madrid', value: 4},
                    {title: 'Dublin', value: 4}
                ]}/>
    </>
