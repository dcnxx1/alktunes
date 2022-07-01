import styled from "styled-components";
import React from 'react';

const IconContainer = styled.span`
background: url(${({pathToIcon}) => pathToIcon}) center no-repeat;
display: block;
cursor: pointer;
`


export default function Icon ({path, ...args }){
    return( <IconContainer {...args} pathToIcon={path} />)
}