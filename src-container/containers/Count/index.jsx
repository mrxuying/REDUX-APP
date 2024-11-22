import { connect } from "react-redux";
import CountUI from '../../components/Count'
import { incrementAction, decrementAction, incrementActionAsync } from "../../redux/count_action";

// function mapStateToProps(state){
//     return {sum: state}
// }

// function mapDispatchToProps(dispatch){
//     return {
//         increment: num => (dispatch(incrementAction(num))),
//         decrement: num => (dispatch(decrementAction(num))),
//         incrementAsync: num => (dispatch(incrementActionAsync(num))),
//     }
// }

//容器组件连接UI组件,默认暴露
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

//简写1
// export default connect(
//     state => ({sum: state}),
//     dispatch => ({
//         increment: num => (dispatch(incrementAction(num))),
//         decrement: num => (dispatch(decrementAction(num))),
//         incrementAsync: num => (dispatch(incrementActionAsync(num))),
//     })
// )(CountUI)

//简写2
export default connect(
    state => ({sum: state}),
    {
        increment: incrementAction,
        decrement: decrementAction,
        incrementAsync: incrementActionAsync,
    }
)(CountUI)