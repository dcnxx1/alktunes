import styled, { keyframes } from "styled-components";
import React from 'react';

const IconTooltip = styled.div`
background: #333;
border: 2px solid white;
width: fit-content;
height: fit-content;
border-radius: 15px;
padding: 0.2rem 50px;
display: none;

`


const IconContainer = styled.span`
background: url(${({ pathToIcon }) => pathToIcon}) center no-repeat;
display: block;
cursor: pointer;
 &:hover ${IconTooltip}{
    display: block;
    position: relative;
    left: 3rem;
 }

`

export default function Icon ( { children, toolTip, path, ...args } ){
    return( <IconContainer {...args} pathToIcon={path}>
       {toolTip && (<IconTooltip>{toolTip}</IconTooltip>) }
    </IconContainer>)
}


Icon.Tooltip = function ( { children, ...args } ){
    return <IconTooltip {...args}>{children}</IconTooltip>
}