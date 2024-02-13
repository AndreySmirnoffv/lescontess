let initialState = 0;

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const CHANGE = 'CHANGE'

export const basketPrice = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRICE":
            return state
        case "SET_PRICE":
            return action.payload
        default:
            return state
    }
}