import React, { Component } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  button: {
    marginTop: '30px',
    marginLeft: '15%',
    marginRight: '15%',
    height: '50px',
    width: '70%',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: '#4ADDAF',
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
  formDiv: {
    marginTop: '30px',
    marginLeft: '15%',
    marginRight: '15%',
  },
  FormControl: {
    marginTop: '30px',
    marginBottom: '15px',
    width: '100%',
  },
});



class SearchExperience extends Component {
  state = {
    toResults: false,
  }

  handleSubmit = () => {
    this.setState(() => ({
      toResults: true
    }))
  }

  render() {
    if (this.state.toResults === true) {
      return <Redirect to='/searchresults' />
    }
    const { classes } = this.props
    return (
      <>
      <div style={{ marginTop: '30px' }}>
          <h1 style={{ textAlign: 'center', color: '#707070' }}>Add to Wishlist</h1>
        </div>

        <div className={classes.formDiv}>
          <center>
            <FormControl className={classes.FormControl}>
          <TextField
            // id="url"
            label="URL"
            // value={url}
            variant="outlined"
          /></FormControl>
          <FormControl className={classes.FormControl}>
          <TextField
            //   id="experience"
            label="Experience Name"
            //   value={experiencename}
            variant="outlined"
          /></FormControl>
          <FormControl className={classes.FormControl}>
          <TextField
            //   id="cost"
            label="Cost"
            //   value={cost}
            variant="outlined"
          /></FormControl></center>
        </div>
        <Button id='addExperience' variant="contained" color="primary" Selected ClassName="selBtn" className={classes.button}>
          Add Experience
      </Button>


        {/* Search form begins */}
        {/* Need to direct Add Experience to page with experience populated */}
        <div className={classes.formDiv}>
        <center><FormControl className={classes.FormControl}>
        <TextField
          // id="search"
          label="Find a Gift"
          // value={search}
          variant="outlined"
        /></FormControl></center></div>
        <Button id='searchBtn' variant="contained" color="primary" Selected ClassName="selBtn" className={classes.button} onClick={this.handleSubmit}>
          Search for Gifts
      </Button>
      </>

    )
  }
}







export default withStyles(styles)(SearchExperience)