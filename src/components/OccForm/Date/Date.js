import React from 'react'
// import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

function Date() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Event Date"
        type="date"
        style={{width: '90%', marginTop: '30px', marginLeft: '15px', marginRight: '15px', marginBottom: '20px'}}
        defaultValue="2019-06-08"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

// function Date (props) {
//   const [selectedDate, handleDateChange] = useState(new Date());

//   return (
//       <KeyboardDatePicker
//         autoOk
//         variant="inline"
//         inputVariant="outlined"
//         label="Event Date"
//         format="MM/dd/yyyy"
//         value={'date'}
//         InputAdornmentProps={{ position: "start" }}
//         onChange={date => handleDateChange(date)}
//       />
//   );
// }

export default Date
