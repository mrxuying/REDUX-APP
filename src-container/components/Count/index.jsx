import React, { Component } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button, Stack} from '@mui/material'

export default class Count extends Component {

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
        // this.setState({sum: sum + num})
        this.props.increment(num)
    }

    decrement = () => {
        const {num} = this.state
        // this.setState({sum: sum - num})
        this.props.decrement(num)
    }

    incrementIfOdd = () => {
        const {num} = this.state
        if(this.props.sum % 2 !== 0){
            this.props.increment(num)
        }
        
    }

    incrementAsync = () => {
        const {num} = this.state
        this.props.incrementAsync(num)
        // setTimeout(() => {
        //     // this.setState({sum: sum + num})
        //     store.dispatch(incrementAction(num))
        // }, 500);     
    }

    handleChange = (event) => {
        this.setState({num: event.target.value})
    };

    render() {
        return (
            <Box sx={{ minWidth: 800 }}>
                <h3>Sum is: {this.props.sum}</h3>
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
                    </Stack>
                </FormControl>
            </Box>
        )
    }
}
