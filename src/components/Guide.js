import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Navbar from "./Navbar";
import { Fade } from '@mui/material';
import {Paper} from '@mui/material';
import img1 from "../download.jpg"
import Avatar from '@material-ui/core/Avatar'; 
import { Grid } from '@mui/material';
import Footer from "./Footer";


function Guide() {
  return (
    <div>
      <Navbar />
      <Paper  elevation={2} sx={{ p:5, bgcolor: "#213F93" , width : "100%" , m:"auto"}} >
      
        <Grid container >
          <Grid item xs={12} md={6}>
            <img src={img1} alt="image" height="100%" width="100%"></img>
          </Grid>

          <Grid item xs={12} md={6}  sx={{p:10}}>
            <Typography variant="h5" sx={{color : 'white'}}>
              Instructions to donate<br/>
            <Typography>
              These instructions will help you to make the donation.<br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of 
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>

            </Typography>
          </Grid>
        </Grid>
      </Paper>

    <Paper elevation={2} sx={{ p:5, bgcolor: "#E3EBF8" , width : "100%", height:500, align : "center"}} >
      <Grid container spacing = {4}>
        
        <Grid item xs={6} >
          <Typography variant="h5" sx={{pt:10}}>
              Instructions to Create Request<br/>
          
          <Typography>
              These instructions will help you to make the donation.<br/>
            

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of 
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>     
          </Typography>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="h4" >How to create request for donation?</Typography>
          <Avatar variant={"rounded"} alt="The image" src={img1} style={{
              width: 600,
              height: 300,
              marginLeft:"0px",
              marginTop: 20
              }} />
        </Grid>
      </Grid>
    </Paper>
    <Footer/>
      </div>
    
  );
}

export default Guide;