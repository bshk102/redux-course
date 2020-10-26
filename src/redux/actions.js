import { DECREMENT, INCREMET } from "./types"

export const increment = () => ({type: INCREMET})
export const decrement = () => ({type: DECREMENT})