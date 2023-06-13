import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { borderRight, margin } from '@mui/system';
import { Grid,Paper} from '@mui/material';
import { styled} from '@mui/material/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import img from '../logo.jpeg';




function Navbar() {
  
  let history=useHistory();
  function handleClick()
  {
    console.log("Clicked");
  }
  
  function handleaboutus()
  {
    history.push("/aboutus");
  }
  function handlehome()
  {
    history.push("/");
  }
  function handleGuide()
  {
    history.push("/guide");
  }
  return (
    
      <AppBar position="static"  style={{background:"#E3EBF8",fontColor:"red",position: "sticky",top: 0,zIndex:10}} >
        <Toolbar  >
        <Avatar variant={"rounded"} alt="The image" src={img} style={{
    width: 70,
    height: 70,
    marginLeft:"0px"
     }} />
          
          <Typography onClick={handleClick} style={{marginLeft:"10px"}} color="black" variant="h4"  >
            Sahayak </Typography>
           <Grid container spacing={0} style={{marginLeft:"7px"}}>
            <Grid item xs={12} md={1}>
            <Typography onClick={handlehome} style={{marginLeft:"10px"}} color="black" variant="h6"  >
            Home </Typography>
            </Grid>
             <Grid item xs={12} md={1}>
            <Typography onClick={handleClick} style={{marginLeft:"10px"}} color="black" variant="h6"  >
            Donate </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
            <Typography onClick={handleClick} style={{marginLeft:"10px"}} color="black" variant="h6"  >
            Create Request </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
            <Typography onClick={handleGuide} style={{marginLeft:"10px"}} color="black" variant="h6"  >
            Guide </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
            <Typography onClick={handleaboutus} style={{marginLeft:"10px"}} color="black" variant="h6"  >
            About Us </Typography>
            </Grid>
            
            
              
            
            

             
           </Grid>
          
          
        </Toolbar>
      </AppBar>

      
    
  );
}
export default Navbar;