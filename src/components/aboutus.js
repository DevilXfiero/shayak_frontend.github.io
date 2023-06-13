import React from "react";
import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography ,Fade} from '@mui/material';
import TextAnimation from "../animations/TextAnimation";
import TextAnimation1 from "../animations/TextAnimation1";
import Footer from "./Footer";
import img1 from "../1005834.jpg";
import { Avatar } from "@mui/material";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";




function aboutus()
{  const paperStyle={padding :20,width:300, margin:"30px 10px 20px 100px"}
   
    return (
      
        <>
        <Navbar/>
        <Container maxWidth="false" style={{padding:"0px"}}>
        <Grid xs={12}>
      
        <div style={{ position:"relative"}}>
        <div style={{position:"absolute",marginTop:"200px"}}>
        <Typography variant="h1" component="h1" style={{marginLeft:"20px"}}>
        <span>
        <TextAnimation></TextAnimation>
        </span>
        </Typography>
        
        <Typography variant="h2" component="h2" style={{marginLeft:"20px"}}>
        <TextAnimation1></TextAnimation1>
         
        </Typography>
        <Typography variant="h5" component="h2" style={{marginLeft:"20px",color:"white"}}> 
         Let's work together and make World great
        </Typography>
        </div>
        <img src="https://personalitymeasurement.com/wp-content/uploads/2016/06/StockSnap_XZHBQOR9GM.jpg" width="100%" height="100%" ></img>
        
        
        
        </div>
        
        </Grid>
        </Container>
        <Container maxWidth="lg" style={{padding:"0px"}}>
        <Box sx={{ bgcolor: 'white', height: '90vh',textAlign:'left',paddingRight:"30px",paddingTop:"80px",boxSizing:"border-box"}} >
        <Grid container interval={false}  >
          <Grid item xs={12} md={6} >

            <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-best-donation-plugins.jpg" alt="img" width="100%" height="100%"></img>
          </Grid>

          <Grid item xs={12} md={6} sx={{p:10,margin:'auto'}}>
            <Typography variant="h5" sx={{color : 'black',p:5}}>
              About Us<br/>
            <Typography>
            Sahayak’s literal meaning in Hindi is someone who helps. We at Sahayak are here to help the NGOs in reaching out to large audiences for their drives in which they want a contribution from common people for the daily needs of underprivileged people. Generally, what happens is that we have a few things at our home that are not in use currently but we do not have any contacts to reach out to for the donation of those things. On the other hand, we also have a lot of NGOs who are working at ground level and are not that popular, and hence they lack in the numbers of donors for their drive. Our website, Sahayak acts as a connecting link between the two groups of people by helping them coordinate these drives in which donors are able to donate and they can be assured that their donation reaches the needy one. 
The origin of this idea came to our mind when we realized that there are a lot of websites that allow people to donate money to NGOs and that too only popular ones, the absence of websites that connect smaller NGOs to large audiences gave us this idea. Also, money-based donations are very common these days, but then there are other items too, that can be reused properly. Our website helps in all this by connecting the donors and the NGOs.
            </Typography>

            </Typography>
          </Grid>
        </Grid>
        
        </Box>
        </Container>
        <Container maxWidth="false" style={{padding:"0px"}}>
        
        <Grid container spacing={0}  style={{ marginLeft: "0px" }}>
        <Grid item xs={12} md={4}>
        <Paper elevation={8} style={paperStyle} >
            <Grid container spacing={0}  style={{ marginLeft: "0px" }}>
            <Grid item xs={12}>
            <img src="https://image.pngaaa.com/502/2546502-middle.png" alt="The img" height="100%" width="100%"></img>
            </Grid>
            
            
            <Grid item xs={12}>
            <Typography  sx={{color : 'black',p:5}}>
              
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
            <img src="https://image.pngaaa.com/502/2546502-middle.png" alt="The img" height="100%" width="100%"></img>
            </Grid>
            
            
            <Grid item xs={12}>
            <Typography  sx={{color : 'black',p:5}}>
              
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
            <img src="https://image.pngaaa.com/502/2546502-middle.png" alt="The img" height="100%" width="100%"></img>
            </Grid>
            
            
            <Grid item xs={12}>
            <Typography  sx={{color : 'black',p:5}}>
              
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> 
              
            </Typography>
            </Grid>
            
            </Grid>
            </Paper>
        </Grid>
    </Grid>
        </Container>
        <Footer/>


        </>

        
        );
}

export default aboutus;