import React from 'react';
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
    marginBottom: '15px',
    maxWidth: 300,

  },
  media: {
    height: 80,
  },
});

function OccCard({name}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          id='cardImage'
          title="Birthday Balloons"
        />
        <CardContent id='content' style={{padding: '10px'}}>
          <Typography gutterBottom variant="h6" component="h4">
            Marianna's Party
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a long description so I can see what the spacing looks like.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{marginLeft: '8%', marginRight: '5%'}}>
        <Button id='update' size="small" backgroundGolor="#4ADDAF">
          Update
        </Button>
        <Button id='wishList' size="small" color="#4ADDAF">
          Wish List
        </Button>
        <Button id='delete' size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}



export default OccCard