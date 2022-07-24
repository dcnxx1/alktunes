import styled from "styled-components";
import React from 'react';
import statics from '../static/statics'

const IconTooltip = styled.div`
/* background: #333; */
border: 2px solid white;
width: fit-content;
height: fit-content;
border-radius: 15px;
display: none;

user-select: none;
`


const IconContainer = styled.span`
background: url(${({ pathToIcon }) => pathToIcon}) center no-repeat;
width: 45px;
height: 45px;
z-index: 15;
@media (max-width: ${statics.SCREEN_SIZE.MOBILE}){
 background-size: 15px;  
}

cursor: pointer;
 /* show icon tooltip on hover */


`

export default function Icon ( { children, toolTip, path, ...args  } ){
    return( <IconContainer {...args} pathToIcon={path}>
       {toolTip && (<Icon.Tooltip {...args}>{children}</Icon.Tooltip>) }
    </IconContainer>)
}


Icon.Tooltip = function ( { children, ...args } ){
    return <IconTooltip {...args}>{children}</IconTooltip>
}