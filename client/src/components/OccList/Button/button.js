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

function OccListBtn({handleGetOccasions}) {
  const classes = useStyles()

  return (
    <div>
      <Button id='occListBtn' variant="contained" color="primary" className={classes.button} href='/CreateOccasion'> 
        Create New Event
      </Button>
    </div>
  );
}

export default OccListBtn