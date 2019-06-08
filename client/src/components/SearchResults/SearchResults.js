import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Mercedes from '../../assets/images/Mercedes.jpeg'
import Skull from '../../assets/images/skull.jpeg'
import Dog from '../../assets/images/Dog.jpeg'
import Rolex from '../../assets/images/Rolex.jpeg'
import Apron from '../../assets/images/Apron.jpeg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { CardActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingLeft: "20px"
  },
  cover: {
    width: 150,
  },
  gifts: {
    marginLeft: "40px",
    marginBottom: "100px",
    marginRight: "40px"
  }
});

// class SearchResults extends Component {
//   render() {
//     const { classes } = this.props

//     return (

    class SearchResults extends Component {
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
            return <Redirect to='/search' />
          }
          const { classes } = this.props
          return (
      <>
        <div style={{ marginTop: '30px' }}>
          <h1 style={{ textAlign: 'center', color: '#707070' }}>Gifts</h1>
        </div>
        <div className={classes.gifts}>

          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Mercedes
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $60,000
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Sleek, shiny and fast car of your Dreams.
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Mercedes}
              title="Gift"
            />
            <CardActions>
            <IconButton aria-label="Add to Wishlist" className={classes.button} onClick={this.handleSubmit}>
          <FavoriteIcon /></IconButton></CardActions>
          </Card>
          <br />

          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Dinosaur Skull
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $200,000,000
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Would be a great addition to your living room.
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Skull}
              title="Gift"
            /><CardActions>
            <IconButton aria-label="Add to Wishlist">
          <FavoriteIcon /></IconButton></CardActions>
          </Card>
          <br />

          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Golden Retriever
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $500
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  A fluffy best friend to follow you everywhere.
          </Typography>
              </CardContent>
              <div className={classes.controls}>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={Dog}
              title="Gift"
            />
            <CardActions>
            <IconButton aria-label="Add to Wishlist">
          <FavoriteIcon /></IconButton></CardActions>
          </Card>
          <br />

          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Rolex Watch
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $3,000
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  You would never be late again & so fancy!
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Rolex}
              title="Gift"
            />
            <CardActions>
            <IconButton aria-label="Add to Wishlist">
          <FavoriteIcon /></IconButton></CardActions>
          </Card>
          <br />

          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Apron
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  $15
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Inexpensive and useful gift for the cooks!
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={Apron}
              title="Gift"
            />
            <CardActions>
            <IconButton aria-label="Add to Wishlist">
          <FavoriteIcon /></IconButton></CardActions>
          </Card>
        </div >
      </>

    )
  }
}

export default withStyles(styles)(SearchResults)