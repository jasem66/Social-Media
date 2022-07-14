import React from 'react'
import { useState } from 'react'
import {
  makeStyles,
  Tooltip,
  Button,
  IconButton,
  Modal,
  Container,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Snackbar,
} from '@material-ui/core'
import Post from './Post'
import {
  AddCircle,
  AddCircleOutline,
  AddIcCallOutlined,
} from '@material-ui/icons'
import { Alert } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  add: {
    position: 'fixed',
    right: '10px',
    bottom: '10px',
  },
  AddCircle: {
    width: '50px',
    height: '50px',
  },
  container: {
    width: '500px',
    height: '500',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      height: '550Px',
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  comment: {
    textAlign: 'center',

    width: '100%',
  },
}))
function Add() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenAlert(false)
  }
  return (
    <>
      <Tooltip title='Add' aria-label='add'>
        <IconButton
          color='primary'
          className={classes.add}
          onClick={() => setOpen(true)}
        >
          <AddCircleOutline className={classes.AddCircle} />
        </IconButton>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form autoComplete='off' className={classes.form}>
            <div className={classes.item}>
              <TextField
                id='standard-basic'
                label='Standard'
                variant='standard'
                style={{ marginBottom: '20px' }}
              />
              <TextField
                className={classes.comment}
                variant='outlined'
                id='standard-multiline-static'
                label='Multiline'
                multiline
                rows={4}
                defaultValue='Default Value'
              />
            </div>
            <div className={classes.item}>
              <TextField select label='visibility' value='Public'>
                <MenuItem value='Public'>Public</MenuItem>
                <MenuItem value='Private'>Private</MenuItem>
                <MenuItem value='Unlisted'>Unlisted</MenuItem>
              </TextField>
            </div>
            <div>
              <FormLabel id='demo-radio-buttons-group-label'>
                Who is allowed to comment?
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value='Everybody'
                  control={<Radio size='small' />}
                  label='Everybody'
                />
                <FormControlLabel
                  value='NObody'
                  control={<Radio size='small' />}
                  label='NObody'
                />
                <FormControlLabel
                  value='My Friends'
                  control={<Radio size='small' />}
                  label='My Friends'
                />
                <FormControlLabel
                  value='Custom'
                  disabled
                  control={<Radio size='small' />}
                  label='Custom(Premium)'
                />
              </RadioGroup>
            </div>
            <div>
              <Button
                onClick={() => setOpenAlert(true)}
                variant='outlined'
                color='primary'
                style={{ marginRight: '10px' }}
              >
                Create
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => {
                  setOpen(false)
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success'>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Add
