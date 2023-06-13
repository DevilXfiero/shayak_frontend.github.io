import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Slide from "./Slide";
import Content from "./Content";
import Footer from "./Footer";
function Homepage()
{
    return (
    <><Navbar /><Slide />
    <Content/>
    <Footer/>
    </>
    
    
    );
}

export default Homepage;