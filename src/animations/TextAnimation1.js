import React from "react";
import styled,{keyframes} from "styled-components";

export default function TextAnimation1()
{
    return <Wrapper>
        we are?
    </Wrapper>; 
}

const animation=keyframes`
 0% {opacity:0; transform: translateY(100px) ;}
 25% {opacity:1; transform: translateX(0px) ;}
 75% {opacity:1; transform: translateX(0px) ;}
 100%{opacity:1; transform: translateX(0px);}
`
const Wrapper=styled.span`
 display:inline-block;
 opacity:0;
 animation-name:${animation};
 animation-duration:6s;
 animation-fill-mode:forwards;
 color:white;
 
`
