import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core'
function App() {
  return (
    <AppBar position="static">
    <Toolbar>
    <Typography variant="headline" color="inherit" >Responsive h3</Typography>
    </Toolbar>
  </AppBar>
  );
}

export default App;
