import React from 'react'
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  media: {
    height: '510px',
     [theme.breakpoints.down('sm')]: {
    height: '350px',
  },
  },
  card: {
    marginTop: theme.spacing(5),
  },
 
}))
function Post() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title='girl'
          image='https://data.whicdn.com/images/124308916/original.jpg'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            James
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            unde! Ab iusto culpa dolores, aliquid eligendi labore fugiat non
            aspernatur dolorum autem doloremque nostrum, libero itaque quisquam
            ratione temporibus suscipit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
