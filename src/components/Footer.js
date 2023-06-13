import React from "react";
import IconButton from '@mui/material/IconButton';



import FacebookIcon from '@mui/icons-material/Facebook';

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { Face, GitHub } from "@mui/icons-material";

const styles = {

  largeIcon: {
    width: 60,
    height: 150,
    Align:'center'
  },

};

const Footer = () => {
  return (
    <Box >
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Sahayak
      </h1>
      
	 


    <div class="social_links">
        <a href="#">
            <span class="fa-stack fa-lg ig combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
              </span>
        </a>
        <a href="#">
            <span class="fa-stack fa-lg fb combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
              </span>
        </a>
        <a href="#">
            <span class="fa-stack fa-lg yt combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
              </span>
        </a>
        <a href="#">
            <span class="fa-stack fa-lg tw combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
        <a href="#">
            <span class="fa-stack fa-lg gt combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-codepen fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
        <a href="#">
            <span class="fa-stack fa-lg tw combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-linkedin fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
    </div>
	</Box>
  );
};
export default Footer;