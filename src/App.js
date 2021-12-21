import React from 'react'


import Home from './Home';
import Contact from './Contact';
import About  from './About';


import {makeStyles} from '@mui/styles'

import { Router, Route } from 'react-router-dom';

import { Container} from '@mui/material';
import NavBar from './NavBar';

const useStyles = makeStyles((theme)=>({
  root:{
      width:"100vw",
      height:"100vh",
      backgroundColor:theme.palette.grey[300],
      paddingTop:theme.spacing(5),

  },
}));
function App() {
  
  const classes =useStyles();
  return (
    <Container className={classes.root} disableGutters>
      <NavBar/>
      <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route  exact path="/contact" component={Contact}></Route>
    </Router>
      </Container>
      
     
  )
}

export default App
