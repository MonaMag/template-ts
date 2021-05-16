import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

test('collapsed should be true', () => {

    //data
const state:StateType = {
    collapsed: false
}

    //action
 const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expectation
    expect(1).toBe(1)
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false', () => {

    const state:StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false)

})


test('reduce should be fail', () => {

    //data
    const state:StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(() => reducer(state, {type: 'FAKE_TYPE'})).toThrowError();

})