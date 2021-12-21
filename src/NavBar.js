import React from 'react'
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import { makeStyles,IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const useStyle=makeStyles(theme=>({
  sectionDesk:{
    display:"none",
    [theme.breakpoints.up('md')]:{
      display:"flex",
    }
  }
}))
function NavBar() {
  const classes=useStyle();

  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}> Material Ui</Typography>
       <div className={classes.sectionDesk}>  
        <Button color="inherit" to="/" component={Link}>Home</Button>
          <Button color="inherit" to="/about" component={Link}>About</Button>
          <Button color="inherit" to="/contact" component={Link}>Contact</Button>
</div>
<IconButton>
  <MoreVertIcon/>
</IconButton>
        </Toolbar>
      </AppBar>

    </>)
}

export default NavBar
