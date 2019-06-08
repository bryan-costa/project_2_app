import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Toaster from '../../assets/images/Toaster.png'
import Stars from '../../assets/images/Stars.png'
import Lightsaber from '../../assets/images/Lightsaber.png'
import Hawaii from '../../assets/images/hawaii.png'
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignContent: 'center',
  },
  paper: {
    maxWidth: 800,

     
  },
  button: {
    width: 150,
    marginTop: 30,
    alignContent: 'center',
    backgroundColor: '#4ADDAF',
    
  },
  buttonbox: {
    paddingLeft: 5,
  },
  prodImage:{
    width: 130,
    height:90,
    paddingTop: 40,
    paddingLeft: 20,
  },
  name: {
      fontSize: 20,
      marginBottom: 15,
      padding: -10,
},
price: {
    marginBottom: 20,
    marginTop: 3,
}
});



function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <img alt="Remy Sharp" src={Toaster} className={classes.prodImage} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
          <h5 className={classes.name}>Awesome Toaster</h5>
          <h5 className={classes.price}>$15.99</h5>
          <img src={Stars} className={classes.stars} /> 

          <Button style={{color: '#fff'}} component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          Gift It
          </Button>
          </div>
          </Grid>
        </Grid>
        
      </Paper>
      <hr />
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <img alt="Remy Sharp" src={Lightsaber} className={classes.prodImage} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
          <h5 className={classes.name}>Light Saber</h5>
          <h5 className={classes.price}>$299.99</h5>
          <img src={Stars} className={classes.stars} /> 

          <Button style={{color: '#fff'}} component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
          Gift It
          </Button>
          </div>
          </Grid>
        </Grid>
        
      </Paper>
      <hr />
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <img alt="Remy Sharp" src={Hawaii} className={classes.prodImage} /> 
          </Grid>
          <Grid item xs>
          <div className={classes.buttonbox}>
          <h5 className={classes.name}>Sky Diving in Hawaii</h5>
          <h5 className={classes.price}>$599.99</h5>
          <img src={Stars} className={classes.stars} /> 

          <Button style={{color: '#fff'}} component={ Link } to='/ContributePage' className={classes.button} variant="outlined" className={classes.button}>
          Contribute
          </Button>
          </div>
          </Grid>
        </Grid>
        
      </Paper>
      <hr />

    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);