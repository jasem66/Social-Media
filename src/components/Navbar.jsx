import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons'
import { useState,useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '60%',
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  cancel: {marginLeft: theme.spacing(1),
   
    [theme.breakpoints.up('sm')]: {
      display: 'none',
     
    },
  },
  toobar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: { display: 'block' },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
  input: { color: 'white', marginLeft: theme.spacing(1) },
  icons: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'none' : 'flex'),
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}))
function Navbar() {
 useEffect(() => {
 setOpen(false)
 console.log(open)
 },[])
 
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toobar}>
        <Typography variant='h6' className={classes.logoLg}>
          Jasem web
        </Typography>
        <Typography variant='h6' className={classes.logoSm}>
          JASEM
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder='Search...' className={classes.input} />
          <Cancel
            onClick={() => {
              setOpen(false)
            }}
            className={classes.cancel}
          />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => {
              setOpen(true)
            }}
          />
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <Mail color='action' />
          </Badge>
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <Notifications color='action' />
          </Badge>
          <Avatar
            alt='Remy Sharp'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSwI55dzhewelQyp1-2TUGOJ51h8O0NPMOg &usqp=CAU'
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
