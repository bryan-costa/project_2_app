import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import IronMan1 from '../../assets/images/IronMan1.png'
import Thor1 from '../../assets/images/Thor1.png'
import Spiderman1 from '../../assets/images/Spiderman1.png'
import Blue1 from '../../assets/images/Blue1.png'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    padding: '0',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  
  avatar: {
    backgroundColor: red[500],
    padding:'none',
  },
}));

function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    {/* Ironman card */}
      <CardHeader
        avatar={
        <Avatar alt="Remy Sharp" src={IronMan1} className={classes.bigAvatar} /> 
         
        }
        
        title="Iron Man"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. 
        </Typography>
      </CardContent>
      <hr />
{/* Thor card */}
      <CardHeader
        avatar={
        <Avatar alt="Remy Sharp" src={Thor1} className={classes.bigAvatar} /> 
        
        }
        
        title="Thor"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. 
        </Typography>
      </CardContent>
      <hr />

{/* Spiderman card */}
<CardHeader
        avatar={
        <Avatar alt="Remy Sharp" src={Spiderman1} className={classes.bigAvatar} /> 
        
        }
        
        title="Spiderman"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. 
        </Typography>
      </CardContent>
      <hr />

{/* Blue card */}
<CardHeader
        avatar={
        <Avatar alt="Remy Sharp" src={Blue1} className={classes.bigAvatar} /> 
        
        }
        
        title="Blue"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. 
        </Typography>
      </CardContent>

    </Card>
  );
}

export default RecipeReviewCard;