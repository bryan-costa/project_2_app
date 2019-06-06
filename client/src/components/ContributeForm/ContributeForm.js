import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    align: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    width: 334,
    marginLeft: 20,
    marginRight: 20,
    align: 'center',
    marginTop: 20,
    backgroundColor: '#FFF',




  },
  buttonbox: {
    marginTop: 80,
    backgroundColor: '#C7C7C7',
    height: 500,
  },
  field: {
    width: 334,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#FFF',
  },
  submit: {
    backgroundColor: '#4ADDAF',
    width: 334,
    marginLeft: 20,
    marginRight: 20,
    align: 'center',
    marginTop: 20,
  },
});



function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
          <div className={classes.buttonbox}>

          <Button component={ Link } to='/EventList' className={classes.button} variant="outlined" className={classes.button}>
           $25.00
          </Button > 

          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          $50.00
          </Button>
          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          $100.00
          </Button>
          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          FULL AMOUNT
          </Button>
          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          CUSTOM
          </Button>

          <TextField className={classes.field}
          variant="outlined" label='Message'
        />

        <Button style={{color: '#fff'}} component={ Link } to='/Contributed' className={classes.submit} variant="outlined">
          SUBMIT
          </Button>


          </div>
        
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);