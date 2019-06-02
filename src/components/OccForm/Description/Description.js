import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 600,
  },
}))



class Description extends Component {

  render() {
    const { classes, item, onItemChange, FormControl, InputLabel, Select, handleChange, inputLabel, values, OutlinedInput, labelWidth } = this.props





    // Code for textfield -----------------------------------------
    // function OutlinedTextFields() {
    //   const classes = useStyles();
    //   const [values, setValues] = React.useState({
    //     name: 'Cat in the Hat',
    //     age: '',
    //     multiline: 'Controlled',
    //     currency: 'EUR',
    //   });

    // const handleChange = name => event => {
    //   setValues({ ...values, [name]: event.target.value });
    // };
    // Code for textfield  END -----------------------------------------

    // Code for age input-------------------------------------------
    // function SimpleSelect() {
    //   const classes = useStyles();
    //   const [values, setValues] = React.useState({
    //     age: '',
    //     name: 'hai',
    //   });

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //   setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    // function handleChange(event) {
    //   setValues(oldValues => ({
    //     ...oldValues,
    //     [event.target.name]: event.target.value,
    //   }));
    // }

    return (
      <>

        {/* Textfield */}
        <TextField
          id="description"
          label="Description"
          multiline
          rowsMax="4"
          value={this.description}
          // onChange={handleChange('multiline')}
          // className={classes.textField}
          // helperText=""
          style={{width: '90%', marginTop: '30px', marginBottom: '30px', marginLeft: '15px', marginRight: '15px'}}
          variant="outlined"
        />
        {/* End textfield */}


      </>
    )
  }
}




export default Description