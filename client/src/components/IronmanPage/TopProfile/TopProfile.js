import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IronMan1 from '../../../assets/images/IronMan1.png'
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    
  },
  button: {
    width: 200,
    margin: 5,
  },
  buttonbox: {
    paddingLeft: 5,
  },
  bigAvatar:{
    width: 70,
    height: 70,
    paddingTop: 10,
  },
  events: {
      textAlign: 'center',
      paddingTop: 10,
      fontSize: 12,
  },
});



function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar alt="Remy Sharp" src={IronMan1} className={classes.bigAvatar} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
          <h3 className={classes.name}>Iron Man</h3>

          <Button component={ Link } to='/AddToWishList' className={classes.button} variant="outlined" className={classes.button}>
           Wishlist
          </Button > 
          </div>
          </Grid>
        </Grid>
      </Paper>
        <div className={classes.events}>
      <h3>Current Events</h3>
      </div>

    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);