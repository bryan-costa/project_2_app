import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 600,
  },
}))

class Description extends Component {

  render() {
    const { classes, description, item, FormControl, InputLabel, Select, handleChange, inputLabel, values, OutlinedInput, labelWidth } = this.props
    return (
      <>
        <TextField
          id="description"
          label="Description"
          multiline
          rowsMax="4"
          value={description}
          onChange={handleChange}
          style={{ width: '90%', marginTop: '30px', marginBottom: '30px', marginLeft: '15px', marginRight: '15px' }}
          variant="outlined"
        />
      </>
    )
  }
}




export default Description