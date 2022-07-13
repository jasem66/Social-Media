import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import Post from './Post'

const useStyles = makeStyles((theme) => ({}))
function Feed() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> 
      
    </Container>
  )
}

export default Feed
