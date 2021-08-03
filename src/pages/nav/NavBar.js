import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import BookIcon from '@material-ui/icons/Book';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {MenuItem} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import me from '../../assets/me.jpeg';
import { yellow } from '@material-ui/core/colors';
const themeColor = yellow[800]
const useStyles = makeStyles((theme)=>({
  root: { flexGrow:1},
  menuButton: {
    marginRight: theme.spacing(2),
    title: {
      flexGrow:1,
    },  
  },
  list: {
    width: 200,
  },
  appbar: {
    color:"white"
  }
}));


function NavBar() {
  const classes = useStyles();
  const [selected, setSelect] = useState(0)
  const iconMap = {
    "Profile": <AccountCircleIcon style = {{fill: selected === 0 ? themeColor : "gray"}}/>,
    "Blogs": <BookIcon style = {{fill: selected === 1 ? themeColor : "gray"}}/>
  }
  const list = () => (
    <div className = {classes.list}>
      <List>
        {['Profile', 'Blogs'].map((text, index) => (
          <MenuItem button  onClick = {()=> {setSelect(index); toggleDrawer(false);}} key={text} component = {Link} to = { index === 0 ? "/": "/" + text} >
            <ListItemIcon>{iconMap[text]}</ListItemIcon>
            <ListItemText primary={<Typography style = {{fontWeight:"bold",  color: selected === index ? themeColor : "gray"  }}>{text}</Typography>}  />
          </MenuItem>
        ))}
      </List>
    </div>
  );
  const [showDrawer, toggleDrawer] = useState(false)
  return (
    <AppBar className = {classes.appbar} position="static" color = "primary">
    <Toolbar variant = "dense">
      <IconButton onClick = {()=> toggleDrawer(true)} edge="start" className = {classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Avatar style  = {{ margin:10}} alt="Hanlin Chen" src={me}/>
      <Typography variant="h6"  className = {classes.title}>
         Hanlin Chen
      </Typography>
    </Toolbar>
    <Drawer open={showDrawer} onClose={()=>toggleDrawer(false)}>
            {list()}
          </Drawer>
  </AppBar>
  );
}

export default NavBar