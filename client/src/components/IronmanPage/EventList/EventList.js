import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import NicCage1 from '../../../assets/images/NicCage1.png'

const useStyles = makeStyles({
  card: {
    width: "100%",
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',

  },
  media: {
    height: 80,
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
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={NicCage1}
          title="Contemplative Reptile"
        />
        <div className={classes.events}>
      <h3 className={ classes.birthday }>BIRTHDAY</h3>
      </div>
      </CardActionArea>
      <CardActions>
      <Button style={{color: '#fff'}} component={ Link } to='/IronmanPage' className={classes.button} variant="outlined" className={classes.button}>
           Wishlist
          </Button > 
      </CardActions>
    </Card>
  );
}

export default MediaCard;