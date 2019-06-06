import React, { Component } from 'react'
import './Name.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
// import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
}
)
)



class Name extends Component {

    render() {
        const { classes, name, item, onItemChange, FormControl, InputLabel, Select, handleChange, inputLabel, values, OutlinedInput, labelWidth } = this.props

        // const handleChange = name => event => {
        //   setValues({ ...values, [name]: event.target.value });
        // }
        
        return (
            <>

                {/* Textfield */}

                <TextField
                    className='textField'
                    id="name"
                    label="Event Name"
                    style={{width: '90%', marginTop: '40px', marginLeft: '15px', marginRight: '15px', marginBottom: '30px'}}
                    // className={classes.textField}
                    value={name}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                {/* End textfield */}


            </>
        )
    }
}




export default Name