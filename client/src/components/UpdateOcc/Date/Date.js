import React, {Component} from 'react'
// import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { getThemeProps } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

class UpDate extends Component {
  render() {

    const { classes, date, container, item, onItemChange, FormControl, InputLabel, Select, handleChange, inputLabel, values, OutlinedInput, labelWidth } = this.props

    return (
      // <form className={classes.container} noValidate>
        <TextField
          id="date"
          value={date}
          label="Event Date"
          type="date"
          onChange={handleChange}
          style={{ fontSize: '35px', width: '90%', marginTop: '30px', marginLeft: '15px', marginRight: '15px', marginBottom: '20px' }}
          defaultValue="2019-06-08"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      // </form>
    )
  }
}


export default UpDate