import React, { Component } from 'react'
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

function UpdateBtn({handleUpdate, handleChange}) {
  const classes = useStyles()

  return (
    <div>
      <Button id='occBtn' href='/OccasionList' variant="contained" color="primary" Selected ClassName="selBtn" className={classes.button} onClick={() => {
        handleUpdate()
        // clearForm()
        // handleChange()
        }}>
        Update Event
      </Button>
    </div>
  );
}

export default UpdateBtn
