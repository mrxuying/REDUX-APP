import React, { Component } from 'react'
import { Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { connect } from 'react-redux';
// import {addPerson} from '../../redux/actions/person';

class Person extends Component {

    state ={ 
        columns: [
            { 
                field: 'index', 
                headerName: 'INDEX', 
                width: 70,
            },
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'firstName', headerName: 'First name', width: 130 },
            { field: 'lastName', headerName: 'Last name', width: 130 },
            {field: 'age', headerName: 'Age', type: 'number', width: 90,},
            {
                field: 'fullName',
                headerName: 'Full name',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 300,
                valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
            },
        ],
      
        paginationModel: { page: 1, pageSize: 10 }
    }
  
    render() {
        return (
            <div>
                <Paper sx={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={this.props.rows}
                        columns={this.state.columns}
                        initialState={{ pagination: this.state.paginationModel }}
                        pageSizeOptions={[5, 10, 100]}
                        checkboxSelection
                        rowCount={this.props.rows.index}
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
            
    )
  }
}

export default connect(
    state => ({rows: state.person}),
    {}
)(Person)