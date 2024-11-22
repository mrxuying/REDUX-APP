import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk}  from 'redux-thunk'
import count from './reducers/count'
import person from './reducers/person'

//combineReducers，将不同reducers整合成一个，参数是一个对象，
//每一个对象的key作为对应state的key
const allReducers = combineReducers({
    count,
    person
})

export default createStore(allReducers, applyMiddleware(thunk))