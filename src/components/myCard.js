import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function myCard() {
  return (
    <Card sx={{ maxWidth: 300 }} style={{marginTop:"30px",marginLeft:"15px",marginRight:"0px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://image.shutterstock.com/image-photo/bubble-speech-cut-out-phrase-260nw-383617726.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Contribute
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This is a request to contribute xyz for abc, Contribute of you are interested.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
export default myCard;