import React, { Component } from 'react'
import './Button.css'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '30px',
    marginLeft: '15%',
    marginRight: '15%',
    height: '50px',
    width: '70%',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: '#4ADDAF',
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
}));

function OccBtn({handleFormSubmit, handleChange, clearForm}) {
  const classes = useStyles()

  // const submit = _ => {
  //   console.log('Here I am!')
  // }

  return (
    <div>
      <Button id='occBtn' variant="contained" color="primary" Selected ClassName="selBtn" className={classes.button} href='/OccasionList' onClick={() => {
        handleFormSubmit()
        // clearForm()
        // handleChange()
        }}>
        Create Event
      </Button>
    </div>
  );
}

export default OccBtn