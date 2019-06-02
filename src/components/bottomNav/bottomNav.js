import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FaceIcon from '@material-ui/icons/Face';
import CalendarIcon from '@material-ui/icons/DateRange';
import WishIcon from '@material-ui/icons/CardGiftcard';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


const useStyles = makeStyles({
  root: {
    // width: 375,
    backgroundColor: '#878993 !important',
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  icon: {
      color: '#ffffff'
  },

  select: {
    fill: '#4ADDAF',
    },

});

function LabelBottomNavigation() {
  const classes = useStyles({});
  const [value, setValue] = React.useState('recents');
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction className={classes.icon}  icon={<CalendarIcon />} />
      <BottomNavigationAction className={classes.icon}  icon={<WishIcon />} />
      <BottomNavigationAction className={classes.icon}  icon={<ChatBubbleIcon />} />
      <BottomNavigationAction className={classes.icon}  icon={<FaceIcon />} />
    </BottomNavigation>


  );
}

export default LabelBottomNavigation;