let initialState = 0;

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