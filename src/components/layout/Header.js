import React from 'react'
import {
  AppBar,
  Grid,
  Typography
} from '@material-ui/core'

const Header = () => {

  return(
    <AppBar position="static" className="header">
      <Grid container>
        <Grid container item xs={12}>
        <Typography variant="h6">
          Github React Topic Explorer
        </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
