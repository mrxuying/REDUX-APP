import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import DialogActions from '@mui/material/DialogActions';
import Stack from '@mui/material/Stack';
import { nanoid } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/person';

// const Context = React.createContext()
// const {Provider} = Context

function PersonDialog(props) {

    const { onClose, selectedValue, open } = props;
    const [error, setError] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const fullName = `${firstName} ${lastName}`
    const [personInfo, setPersonInfo] = useState({})

    // const contextType = Context

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleBlur = (value) => {
        if(value) setError(false);
        else setError(true);
    };

    const handleSave = (value) => {
        // console.log({id: nanoid(), firstName, lastName, age})
        setPersonInfo((personInfo) => {
            console.log('personInfo', personInfo)
            return {id: nanoid(), firstName, lastName, age}
        })
        console.log(personInfo)
        props.addPerson(personInfo)
        
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle >Add A Person</DialogTitle>
            <Divider />
            <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
                <div>
                    <TextField
                        // sx={{width: '280px', padding: '10px', display: 'flex', gap: '10px' }}
                        error={error}
                        onBlur={() => {handleBlur(firstName)}}
                        helperText={error ? 'Name is required.' : null}
                        id="dialogName-01"
                        label="First Name"
                        value={firstName}
                        onChange={(event) => {
                            setError(false)
                            setFirstName(event.target.value);
                        }}
                    />
                    <TextField
                        // sx={{width: '280px', padding: '10px'}}
                        error={error}
                        onBlur={() => {handleBlur(lastName)}}
                        helperText={error ? 'Name is required.' : null}
                        id="dialogName-02"
                        label="Last Name"
                        value={lastName}
                        onChange={(event) => {
                            setError(false)
                            setLastName(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <TextField
                        // sx={{width: '280px'}}
                        error={error}
                        onBlur={() => {handleBlur(age)}}
                        helperText={error ? 'Name is required.' : null}
                        id="dialogAge-03"
                        label="Age"
                        value={age}
                        onChange={(event) => {
                            setError(false)
                            setAge(event.target.value);
                        }}
                    />
                    <TextField
                        disabled
                        // sx={{width: '280px', padding: '10px'}}
                        id="dialogName-04"
                        label="Full Name"
                        value={fullName}
                    />
                </div>
                
            
            </Box>
            <DialogActions>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }} spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={handleClose} variant="outlined" color="error">CLOSE</Button>
                        <Button onClick={handleSave} variant="contained" color="primary">SAVE</Button>
                    </Stack>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

PersonDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

function DialogButton(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>ADD-PERSON</Button>
        <PersonDialog
            open={open}
            onClose={handleClose}
            addPerson={props.addPerson}
        />
        {/* <Provider value={props.addPerson}>
            <PersonDialog
                open={open}
                onClose={handleClose}
                // addPerson={props.addPerson}
            />
        </Provider> */}
      </div>
    );
}

export default connect(
    state => ({}),
    {addPerson}
)(DialogButton)