import React from 'react'
import {
  makeStyles,
  Container,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
  Link,
} from '@material-ui/core'
import { AvatarGroup } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: '0',
    paddingTop: theme.spacing(4),
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#555',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontWeight: 'bold',
  },
}))
function RightBar() {
  const classes = useStyles()
  return (
    <Container className={classes.container} >
      <Typography className={classes.title} gutterBottom variant='h5'>
        My Friends
      </Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt='Remy Sharp'
          src='https://i.pinimg.com/736x/78/a3/73/78a373b81d241eda8528dc56bc2a9c38.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://i.pinimg.com/736x/ff/78/51/ff785158100a31af5a57d2a3fa47f57b.jpg'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://ae05.alicdn.com/kf/HTB10hoZbfvsK1RjSspdq6AZepXag/2022-Hot-Shorts-School-Girls-American-Style-High-Quality-Woman-Denim-Shorts-Party-Sexy-Short-Birthday.jpg'
        />
        <Avatar
          alt='Agnes Walker'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZzCPAEUbsOuUy0zXqB2cmB1U04He8JNHIA&usqp=CAU'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEcvhP3lj1yY8hyq5L61YF5F5u0F6W9pVjQ&usqp=CAU'
        />
      </AvatarGroup>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        style={{ marginTop: '20px' }}
      >
        Best Friend
      </Typography>
      <ImageList
        style={{ marginTop: '10px' }}
        gutterBottom
        className={classes.image}
        cols={1}
        rowHeight={280}
      >
        <ImageListItem>
          <img
            src='https://i.pinimg.com/236x/43/d1/69/43d16906d7bf67b2d8850df5398fc864.jpg'
            alt=''
          />
        </ImageListItem>
      </ImageList>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        style={{ marginTop: '15px' }}
      >
        Categories
      </Typography>
      <Link variant='body2' href='#' className={classes.link}>
        Sport
      </Link>
      <Link variant='body2' href='#' className={classes.link}>
        Party
      </Link>
      <Link variant='body2' href='#' className={classes.link}>
        Game
      </Link>
      <Link variant='body2' href='#' className={classes.link}>
        Travel
      </Link>
    </Container>
  )
}

export default RightBar
