import React, { Component } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button, Stack, TextField} from '@mui/material'
import { connect } from "react-redux";
// import { incremented, decremented } from "../../redux/store-config";
import { incrementAction, decrementAction, incrementActionAsync } from '../../redux/actions/count';
import DialogButton from '../Dialog'

//UI组件
class Count extends Component {

    state = {
        numArray: [
            {num: 1, id: '01'},
            {num: 2, id: '02'},
            {num: 3, id: '03'},],
        num: 1,
    }

    increment = () => {
        console.log(this.props)
        const {num} = this.state
        this.props.increment(num)
    }

    decrement = () => {
        const {num} = this.state
        this.props.decrement(num)
    }

    incrementIfOdd = () => {
        const {num} = this.state
        if(this.props.sum % 2 !== 0){
            this.props.increment(num)
        }
        
    }

    // incrementAsync = () => {
    //     const {num} = this.state
    //     setTimeout(() => {
    //         this.props.incrementAsync(num)
    //     }, 500);     
    // }

    incrementAsync = () => {
        const {num} = this.state
        this.props.incrementAsync(num)  
    }

    addPerson = () => {
        console.log('add-person')
    }

    handleChange = (event) => {
        this.setState({num: event.target.value})
    };

    render() {
        
        return (
            <Box sx={{ minWidth: 800 }}>
                <TextField
                    id="filled-read-only-input"
                    label="SUM"
                    value={this.props.sum}
                    variant="filled"
                    slotProps={{
                        input: {readOnly: true,},
                    }}
                />
                <FormControl sx={{ m: 1, minWidth: 160 }}>
                    <InputLabel>Num</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.num}
                        label="Num"
                        onChange={this.handleChange}
                        sx={{height: 48}}
                    >
                        {
                            this.state.numArray.map((obj) => {
                                return (
                                    <MenuItem key={obj.id} value={obj.num}>{obj.num}</MenuItem>
                                )
                            })
                        }
                    </Select> 
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 160 }}>
                    <Stack spacing={1} direction="row">
                        <Button variant="contained" onClick={this.increment}>increment</Button>
                        <Button variant="contained" onClick={this.decrement}>decrement</Button>
                        <Button variant="contained" onClick={this.incrementIfOdd}>incrementIfOdd</Button>
                        <Button variant="contained" onClick={this.incrementAsync}>incrementAsync</Button>
                        <DialogButton />
                    </Stack>
                </FormControl>
                <TextField
                    id="filled-read-only-input"
                    label="PERSON-COUNT:"
                    value={this.props.personList.length}
                    variant="filled"
                    slotProps={{
                        input: {readOnly: true,},
                    }}
                />
            </Box>
        )
    }
}

//容器组件简写2
export default connect(
    state => ({sum: state.count, personList: state.person}),
    {
        increment: incrementAction,
        decrement: decrementAction,
        incrementAsync: incrementActionAsync
    }
)(Count)

//完整写法
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
// export default connect(mapStateToProps, mapDispatchToProps)(Count)

//简写1
// export default connect(
//     state => ({sum: state}),
//     dispatch => ({
//         increment: num => (dispatch(incrementAction(num))),
//         decrement: num => (dispatch(decrementAction(num))),
//         incrementAsync: num => (dispatch(incrementActionAsync(num))),
//     })
// )(Count)