import { INCREMENT, DECREMENT } from "./constant"
import store from './store'

// export default function incrementAction(data){
//     return {type: INCREMENT, data}
// }

export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})

export function incrementActionAsync(data){
    return () => {
        setTimeout(() => {
            store.dispatch(incrementAction(data))
        }, 500);
    }
}

