import React from 'react';
import styled from "styled-components";


const FeatureContainer = styled.div`
background: url(${({imgSrc}) => imgSrc}) center no-repeat;
background-size: contain;

width: 100%;
height: 100%;
border: 2px solid black;
`
const GlassContainer = styled.div `
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(5.6px);
    border: 1px solid rgba(255, 255, 255, 0.23);
`

export default function Feature({children, ...args}){
    return <FeatureContainer {...args}>{children}</FeatureContainer>
}

Feature.Glass = function({children, ...args}) {
    return <GlassContainer {...args}>{children}</GlassContainer>
}