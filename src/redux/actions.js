import { DECREMENT, INCREMENT } from "./types"

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const asyncIncrement = (dispatch) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment())
        }, 2000)
    }
}