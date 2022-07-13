import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import {
  Home,
  List,
  TabletMac,
  Bookmark,
  PhotoCamera,
  Storefront,
  Settings,
  ExitToApp,
  PlayCircleOutline,
  People
} from '@material-ui/icons'
import { Typography } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  container: {
    position:'sticky',
    top:0,
    height: '100vh',
    color: 'white',
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: "white",
      color:theme.palette.primary.main,
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  icon:{
    marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize:'20px',
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))
function LeftBar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <People className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>

      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  )
}

export default LeftBar
