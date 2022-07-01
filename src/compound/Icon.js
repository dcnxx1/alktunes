import styled, { keyframes } from "styled-components";
import React from 'react';

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
display: block;
width: 45px;
height: 45px;
cursor: pointer;
 /* show icon tooltip on hover */
 &:hover ${IconTooltip}{
    display: block;
    position: relative;
    left: 3rem;
 }
 &:hover{
    transition: border-radius 0.2s linear, transform 0.2s linear;
    transform: scale(1.06)
 }

`

export default function Icon ( { children, toolTip, path, ...args } ){
    return( <IconContainer {...args} pathToIcon={path}>
       {toolTip && (<IconTooltip {...args}>{toolTip}</IconTooltip>) }
    </IconContainer>)
}


Icon.Tooltip = function ( { children, ...args } ){
    return <IconTooltip {...args}>{children}</IconTooltip>
}