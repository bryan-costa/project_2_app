import React from 'react'
import UserInput from '../../components/UserInput'
import { makeStyles } from '@material-ui/core/styles';
import './index.css'


const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          paddingTop: '10px',
          paddingBottom: '10px',
          height: '812px',
        },
        imageArt: {
        display: 'block',
        marginTop: 40,
        },
      logo:{
        margin: '60px',

      }
      }));


      function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <img className={classes.logo} src="/images/logo.png" alt='logo' />
        <UserInput />
        <imageArt />
        {/* <div className={classes.imagebox}> */}
        <img className={classes.imageArt} src="/images/LoginBottomArt.png" alt='art' />
        {/* </div> */}
    </div>
  );
}

export default Login;
