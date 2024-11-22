import { INCREMENT,DECREMENT } from "../constant"

export default function count(preState, action){
    const {type, data} = action

    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState || 0
    }
}