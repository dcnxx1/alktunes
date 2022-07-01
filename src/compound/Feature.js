import React from 'react';
import styled from "styled-components";


const FeatureContainer = styled.div`
background: url(${({imgSrc}) => imgSrc}) center no-repeat;
background-size: 100% 100%;
padding: 0.5rem;
display: flex;
width: 80%;
max-width: 300px;

align-items: flex-end;
justify-content: center;
height: 100%;
border: 2px solid white;

@media screen and (max-width: 1000px){
    
}
`
const GlassContainer = styled.div `
    
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.4px);
    -webkit-backdrop-filter: blur(10.4px);

    display: flex;
    height: 100px;
    width: 90%;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`

export default function Feature({children, artistName, ...args }){
    return <FeatureContainer {...args}>
        <Feature.Glass {...args}>{artistName}</Feature.Glass>
    </FeatureContainer>
}

Feature.Glass = function({children, ...args}) {
    return <GlassContainer {...args}>{children}</GlassContainer>
}