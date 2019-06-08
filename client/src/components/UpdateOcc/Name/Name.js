import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
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



class UpdateName extends Component {

    render() {
        const { classes, name, item, onItemChange, FormControl, InputLabel, Select, handleChange, inputLabel, values, OutlinedInput, labelWidth } = this.props
        
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




export default UpdateName