import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IronmanBirthday from '../../../assets/images/IronmanBirthday.png'
import Stark1 from '../../../assets/images/stark1.png'

const useStyles = makeStyles({
  card: {
    width: "100%",
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',

  },
  media: {
    height: 110,
    marginTop: 20,
  },
  events: {
      textAlign: 'center',
      paddingTop: 10,
  },
  button: {
    width: 200,
    margin: 'auto',
    backgroundColor: '#4ADDAF',
    fontColor: '#fff',
  },
  birthday: {
      fontSize: 18,
      fontColor: '#fff',
      margin: 0,
  },
  cardArea: {
      marginBottom: 0,
  },

});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={IronmanBirthday}
          title="Contemplative Reptile"
        />
        <div className={classes.events}>
      <h3 className={ classes.birthday }>BIRTHDAY</h3>
      </div>
      </CardActionArea>
      <CardActions>
      <Button style={{color: '#fff'}} component={ Link } to='/IronmanWishList' className={classes.button} variant="outlined" className={classes.button}>
           Wishlist
          </Button > 
      </CardActions>
      <CardActionArea className={classes.cardArea}>
        <CardMedia
          className={classes.media}
          image={Stark1}
          title="Contemplative Reptile"
        />
        <div className={classes.events}>
      <h3 className={ classes.birthday }>WEDDING</h3>
      </div>
      </CardActionArea>
      <CardActions>
      <Button style={{color: '#fff'}} component={ Link } to='/IronmanWishList' className={classes.button} variant="outlined" className={classes.button}>
           Wishlist
          </Button > 
      </CardActions>
    </Card>
  );
}

export default MediaCard;