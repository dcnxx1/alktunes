import React from 'react'
import styled from 'styled-components';
const FeatureContainer = styled.div`
background: url(${({pathToImg}) => pathToImg}) no-repeat center;
width: 100%;
display: flex;
align-items: flex-end;
justify-content: center;
background-size: 100% 100%;

height: 100%;


`

const GlassEffect = styled.span`
  /* From https://css.glass */
background: ${({feel}) => feel == "light" ? "rgba(255, 255, 255, 0.04)" : "background: rgba(16, 16, 16, 0.42)" };
color: ${({feel}) => feel == "dark" ? "#FFF" : "#000"};
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.1px);
-webkit-backdrop-filter: blur(6.1px);
height: 40%;
width: 70%;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
padding-bottom: 1rem;
font-size: 20pt;
user-select: none;
`

function Feature({pathToImg, artist, feel}) {
  return (
    <FeatureContainer pathToImg={pathToImg}>    
    <GlassEffect feel={feel}>{artist}</GlassEffect>    
    </FeatureContainer>
  )
}

export default Feature