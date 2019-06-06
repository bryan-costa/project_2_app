import React, {Component} from 'react';
import './assets/css/card.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Name from '../../OccForm/Name'
import Description from '../../OccForm/Description'


const useStyles = makeStyles({
  card: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '15px',
    marginBottom: '30px',
    maxWidth: 300,

  },
  media: {
    height: 80,
  },
});

const handleSelectImage = (type) => {
    switch (type) {
      case 'birthday':
        console.log('birthday')
        return "/images/balloons.png"
      case 'wedding':
        console.log('wedding')
        return "/images/wedding.jpg"
      case 'valentines':
        console.log('valentines')
        return '/images/valentines.jpg'
      case 'baby':
        return '/images/baby.jpg'
      case 'because':
        return '/images/sky.jpg'
    }
}


function OccCard({ newOcc = [], handleDeleteOccasion }) {
  const classes = useStyles();
  return (
    newOcc.map(({ userId, id, name, type, description }) => {
      const image = handleSelectImage(type)
      return <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            image={image}
            className={classes.media}
            id='cardImage'
            title="Birthday Balloons"
          />
          <CardContent id='content' style={{ padding: '10px' }}>
            <Typography id='name' gutterBottom variant="h6" component="h4">
              {name}
            </Typography>
            <Typography id='description' variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ marginLeft: '8%', marginRight: '5%' }}>
          <Button id='update' size="small" backgroundGolor="#4ADDAF" href={'/UpdateOccasion'}>
            Update
        </Button>
          <Button id='wishList' size="small" color="#4ADDAF" href={'/searchForm'}>
            Wish List
        </Button>
          <Button id='delete' size="small" color="primary" onClick={() => handleDeleteOccasion(id)}>
            Delete
        </Button>
        </CardActions>
      </Card>
    }
  ))
}



export default OccCard