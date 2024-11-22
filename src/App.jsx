import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
import Divider from '@mui/material/Divider'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Count />
        <Divider />
        <Person />
      </div>
    )
  }
}

