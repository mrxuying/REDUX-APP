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
        num: '',
        sum: 0,
    }

    increment = () => {
        const {num, sum} = this.state
        this.setState({sum: sum + num})
    }

    decrement = () => {
        const {num, sum} = this.state
        this.setState({sum: sum - num})
    }

    incrementIfOdd = () => {
        const {num, sum} = this.state
        if(sum % 2 !== 0){
            this.setState({sum: sum + num})
        }
        
    }

    incrementAsync = () => {
        const {num, sum} = this.state
        setTimeout(() => {
            this.setState({sum: sum + num})
        }, 500);     
    }

    handleChange = (event) => {
        this.setState({num: event.target.value})
    };

    

    render() {
        return (
            <Box sx={{ minWidth: 800 }}>
                <h3>Sum is: {this.state.sum}</h3>
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
