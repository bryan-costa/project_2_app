import React, { Component } from 'react'
import './Button.css'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '30px',
    marginLeft: '20%',
    marginRight: '20%',
    height: '40px',
    width: '60%',
    fontSize: '18px',
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
      <Button id='occListBtn' href='/CreateOccasion' variant="contained" color="primary" className={classes.button} href='/CreateOccasion'> 
        Create New Event
      </Button>
    </div>
  );
}

export default OccListBtn

      
