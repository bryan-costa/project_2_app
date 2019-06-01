import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

// styles brought in from material ui
// define one styles variable and keep adding to it as you bring in each component
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
})


// building the form
class occForm extends Component {
    render() {
        const { classes, name, type, date, description, userid, handleInputChange, handleFormSubmit } = this.props
        // Do I have to get rid of these react hooks?
        const inputLabel = React.useRef(null);
        const [labelWidth, setLabelWidth] = React.useState(0);
        React.useEffect(() => {
            setLabelWidth(inputLabel.current.offsetWidth);
        }, [])
        return (
            <>
                {/* dropdown menu for selecting event type */}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                Select Event
                             </InputLabel>
                            <Select
                                native
                                value={this.state.type}
                                onChange={this.handleInputChange('type')}
                                input={
                                    <OutlinedInput name="type" labelWidth={labelWidth} id="outlined-age-native-simple" />
                                }
                            >
                                <option value="" />
                                <option value={'birthday'}>Birthday</option>
                                <option value={'wedding'}>Wedding</option>
                                <option value={'baby'}>Baby</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* date picker */}
                    <Grid item xs={12}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Date"
                                type="date"
                                defaultValue="2019-06-08"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                    {/* description text field */}
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="description"
                            label="Description"
                            multiline
                            rowsMax="4"
                            value={this.state.description}
                            onChange={this.handleInputChange('description')}
                            className={classes.textField}
                            margin="normal"
                            helperText="Please enter a description of your event."
                            variant="outlined"
                        />
                    </Grid>
                    {/* button to submit new event details */}
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" className={classes.button} onClick={handleFormSubmit}>
                            Create Event
                        </Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default occForm