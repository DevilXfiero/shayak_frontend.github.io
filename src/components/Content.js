import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Paper,Box } from "@material-ui/core";
import { Typography,Container } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { maxWidth, textAlign } from "@mui/system";
import { Avatar } from "@mui/material";
import img1 from '../img1.jpg';
import support from '../help.jpeg'
import help from '../help1.png'
import myCard from './myCard';

const useStyles = makeStyles(theme => ({
    paperRoot: {
       margin: 'auto',
       backgroundColor: 'white',
       padding: 'auto'
       
    },
    paperMid:
    {
        backgroundColor: '#E3EBF8'
    }
    ,
    textdecor:{
      color: 'grey'
    }
 }));

function Content()
{ 
    const paperStyle={padding :20,width:300, margin:"30px 10px 20px 100px"}
    const classes=useStyles();
    
    
return (
    <>
     <Paper elevation={1} className={classes.paperMid} >
     <Typography style={{textAlign:"center",fontSize:"50px"}}>What is Sahayak?</Typography>
     <Grid container spacing={0}  style={{ marginLeft: "0px" }}>
        <Grid item xs={12} md={4}>
        <Paper elevation={8} style={paperStyle} >
            <Grid container spacing={0}  style={{ marginLeft: "0px" }}>
            <Grid item xs={12}>
            <img src={help} alt="The img" height="100%" width="100%" ></img>
            </Grid>
            
            
            <Grid item xs={12}>
            <Typography  style={{textAlign:"center",fontSize:"40px",fontFamily:"Montserrat"}}>
               HELP?
              
            </Typography>
            <Typography className={classes.textdecor} sx={{color : 'black',p:5}}>
              
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> 
              
            </Typography>
            </Grid>
            
            </Grid>
            </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        <Paper elevation={8} style={paperStyle} >
            <Grid container spacing={0}  style={{ marginLeft: "0px" }}>
            <Grid item xs={12}>
            <img src={support} alt="The img" height="100%" width="100%"></img>
            </Grid>
            
            
            <Grid item xs={12}>
            <Typography  style={{textAlign:"center",fontSize:"40px",fontFamily:"Montserrat",marginTop:"18px"}}>
               CONNECT
              
            </Typography>
            <Typography className={classes.textdecor} sx={{color : 'black',p:5}}>
              
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> 
              
            </Typography>
            </Grid>
            
            </Grid>
            </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
            <Paper elevation={8} style={paperStyle} >
            <Grid container spacing={0}  style={{ marginLeft: "0px" }}>
            <Grid item xs={12}>
            <img src="https://thumbs.dreamstime.com/b/illustration-teamwork-logo-colorful-vector-design-isolated-white-background-teamwork-people-together-logo-vector-135541030.jpg" alt="The img" height="100%" width="100%"></img>
            </Grid>
            
            
            <Grid item xs={12}>
            <Typography  style={{textAlign:"center",fontSize:"40px",fontFamily:"Montserrat",marginTop:"18px"}}>
              SUPPORT
              
            </Typography>
            <Typography className={classes.textdecor} sx={{color : 'black',p:5}}>
              
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> 
              
            </Typography>
            </Grid>
            
            </Grid>
            </Paper>
        </Grid>
    </Grid>
    
    
    <Typography style={{textAlign:"center",fontSize:"50px"}}>Success Stories</Typography>
    
    <Carousel variant="dark" style={{paddingBottom:"70px"}}>
    <Carousel.Item interval={false}>
    <Container component="main" maxWidth="lg">
    <Paper elevation={10} className={classes.paperRoot} maxWidth="sm">
    
    <Grid container interval={false}  >
          <Grid item xs={12} md={6} >

            <img src={img1} alt="img" width="100%" height="100%"></img>
          </Grid>

          <Grid item xs={12} md={6} sx={{p:10,margin:'auto'}}>
            <Typography variant="h5" sx={{color : 'black',p:5}}>
              Story<br/>
            <Typography>
              These instructions will help you to make the donation.
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
    </Container>
      
    </Carousel.Item>
    <Carousel.Item >
    <Container component="main" maxWidth="lg">
    <Paper elevation={10} className={classes.paperRoot} maxWidth="sm">
    
    <Grid container interval={false}  >
          <Grid item xs={12} md={6} >

            <img src={img1} alt="img" width="100%" height="100%"></img>
          </Grid>

          <Grid item xs={12} md={6} sx={{p:10,margin:'auto'}}>
            <Typography variant="h5" sx={{color : 'black',p:5}}>
              Story<br/>
            <Typography>
              These instructions will help you to make the donation.
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
    </Container>
      
    </Carousel.Item>
    <Carousel.Item>
    <Container component="main" maxWidth="lg">
    <Paper elevation={10} className={classes.paperRoot} maxWidth="sm">
    
    <Grid container interval={false}  >
          <Grid item xs={12} md={6} >

            <img src={img1} alt="img" width="100%" height="100%"></img>
          </Grid>

          <Grid item xs={12} md={6} sx={{p:10,margin:'auto'}}>
            <Typography variant="h5" sx={{color : 'black',p:5}}>
              Story<br/>
            <Typography>
              These instructions will help you to make the donation.
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
    </Container>
      
    </Carousel.Item>
    </Carousel>
    </Paper>
    </>

);
}

export default Content;