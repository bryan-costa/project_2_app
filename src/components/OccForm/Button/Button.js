import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '30px',
    marginLeft: '15px',
    marginRight: '15px',
    height: '50px',
    width: '90%',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: '#4ADDAF',
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
}));

function OccBtn({handleFormSubmit}) {
  const classes = useStyles()

  // const submit = _ => {
  //   console.log('Here I am!')
  // }

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => {handleFormSubmit()}}>
        Create Event
      </Button>
    </div>
  );
}

export default OccBtn