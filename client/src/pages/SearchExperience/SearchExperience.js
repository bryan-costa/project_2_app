import React, { Component } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'

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
  }
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
        <div className={classes.formDiv}>

          <TextField
            // id="url"
            label="URL"
            // value={url}
            variant="outlined"
          />
          <TextField
            //   id="experience"
            label="Experience Name"
            //   value={experiencename}
            variant="outlined"
          />
          <TextField
            //   id="cost"
            label="cost"
            //   value={cost}
            variant="outlined"
          />
        </div>
        <Button id='addExperience' variant="contained" color="primary" Selected ClassName="selBtn" className={classes.button}>
          Add Experience
      </Button>

        {/* Search form begins */}
        <TextField
          // id="search"
          label="Input a search field"
          // value={search}
          variant="outlined"
        />
        <Button id='searcBtn' variant="contained" color="primary" Selected ClassName="selBtn" className={classes.button} onClick={this.handleSubmit}>
          Search for item
      </Button>
      </>
    )
  }
}







export default withStyles(styles)(SearchExperience)