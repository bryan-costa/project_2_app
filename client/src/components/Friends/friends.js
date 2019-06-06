import React from 'react'

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IronMan1 from '../../assets/images/IronMan1.png'
import Spiderman from '../../assets/images/Spiderman1.png'
import Thor from '../../assets/images/Thor1.png'
import Blue from '../../assets/images/Blue1.png'
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: 0,
  },
  paper: {
    width: 600,
    marginTop: 5,
    marginBottom: 5,
    padding: 20,
    position: 'center',
    
  },
  button: {
    width: 70,
    marginLeft: 10,
    fontSize: 10,
  },
  buttonbox: {
    paddingLeft: 0,
    PaddingBottom: 20,
  },
  bigAvatar:{
    width: 70,
    height: 70,
    paddingTop: 25,
  },
  name:{
    paddingBottom: 0,
    paddingLeft: 10,
    marginBottom: 5,
  },
  event:{
    paddingTop: 0,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 0,
  }
});



function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
{/* Ironman Card */}
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar alt="Remy Sharp" src={IronMan1} className={classes.bigAvatar} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
              <h3 className={classes.name}>Iron Man</h3>
              <p className={classes.event}>Wedding</p>
          <Button component={ Link } to='/IronmanPage' className={classes.button} variant="outlined" className={classes.button}>
           Profile
          </Button > 
          <Button component={ Link } to='/EventList' className={classes.button} variant="outlined" className={classes.button}>
           Message
          </Button > 

          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          Unfriend
          </Button>

          </div>
          </Grid>
        </Grid>
      </Paper>

{/* Spiderman Card */}

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar alt="Remy Sharp" src={Spiderman} className={classes.bigAvatar} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
              <h3 className={classes.name}>Spiderman</h3>
              <p className={classes.event}>Birthday</p>
          <Button component={ Link } to='/AddToWishList' className={classes.button} variant="outlined" className={classes.button}>
           Profile
          </Button > 
          <Button component={ Link } to='/AddToWishList' className={classes.button} variant="outlined" className={classes.button}>
           Message
          </Button > 

          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          Unfriend
          </Button>

          </div>
          </Grid>
        </Grid>
      </Paper>
{/* Thor Card */}
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar alt="Remy Sharp" src={Thor} className={classes.bigAvatar} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
              <h3 className={classes.name}>Thor</h3>
              <p className={classes.event}>Wedding</p>
          <Button component={ Link } to='/AddToWishList' className={classes.button} variant="outlined" className={classes.button}>
           Profile
          </Button > 
          <Button component={ Link } to='/AddToWishList' className={classes.button} variant="outlined" className={classes.button}>
           Message
          </Button > 

          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          Unfriend
          </Button>

          </div>
          </Grid>
        </Grid>
      </Paper>

{/* Blue Card */}
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>

            
          <Avatar alt="Remy Sharp" src={Blue} className={classes.bigAvatar} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
              <h3 className={classes.name}>Blue</h3>
              <p className={classes.event}>Wedding</p>

          <Button component={ Link } to='/AddToWishList' className={classes.button} variant="outlined" className={classes.button}>
           Profile
          </Button > 

          <Button component={ Link } to='/AddToWishList' className={classes.button} variant="outlined" className={classes.button}>
           Message
          </Button > 

          <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          Unfriend
          </Button>

          </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);