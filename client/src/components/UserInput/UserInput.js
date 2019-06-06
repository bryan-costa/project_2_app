import React from 'react'
import './UserInput.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'block',
        margin: 'auto',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '95%'
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
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

function UserInput() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
            />
            <div>
                <Button id='login' component={ Link } to='/OccasionList' variant="contained" color="primary" className={classes.button}>
                    Login
                </Button>

                {/* <Button component={ Link } to='/ViewFriends' className={classes.button} variant="outlined" className={classes.button}>
                Friends
                </Button> */}


            </div>
        </form>
    );
}

export default UserInput;
