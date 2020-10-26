import { DECREMENT, INCREMET } from "./types"

export const rootReducer = (state, action) => {
    if (action.type===INCREMET) {
        return state +1
    }   else if (action.type===DECREMENT) {
        return state -1
    }

    return state
}