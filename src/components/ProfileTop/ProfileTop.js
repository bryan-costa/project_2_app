import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    display: 'block',
    position:'right',
  },



}));

function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
        <React.Fragment>
            <Button variant="outlined" className={classes.button}>
            Wishlist
            </Button>
            <Button variant="outlined" className={classes.button}>
            Friends
            </Button>
      </React.Fragment>
     
      </div>
  );
}

export default OutlinedButtons;

