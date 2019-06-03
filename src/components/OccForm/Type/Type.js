import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Type() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    type: '',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className={classes.root} autoComplete="off" >
      <FormControl variant="outlined" className={classes.formControl} style={{width: '90%', margin: '15px'}}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Event Type
        </InputLabel>
        <Select
          value={values.type}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="type" id="type" />}
        >
          <MenuItem value={'birthday'}>Birthday</MenuItem>
          <MenuItem value={'wedding'}>Wedding</MenuItem>
          <MenuItem value={'baby'}>Baby</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default Type