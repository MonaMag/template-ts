type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

export type StateType = {
    collapsed: boolean
}

//важный момент: какого типа к нам приходит стейт, такого типа стейт мы обязаны выкинуть наружу
export const reducer = (state: StateType, action: ActionType): StateType  => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {
                ...state, collapsed: !state.collapsed
            };
        default:
            //return state;  либо можно сгенерировать новую ошибку,в случаях когда это явно наша ошибка
            throw new Error('Incorrect action type')
    }
    /*if(action.type === TOGGLE_CONSTANT) {
        return !state;
    }*/
    return state;
}