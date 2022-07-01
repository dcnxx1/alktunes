import styled from "styled-components";
import React from 'react';
import Icon from "./Icon";
const TrackContainer = styled.div`
width: 100%;
height: fit-content;
display: flex;
border-bottom: 2px solid white;
padding: 0.5rem;
padding-bottom: 0.7rem;
`
// inherit from Icon.js
const TrackIcon1 = styled(Icon)`
border: 2px solid white;
width: 100px;
height: 100px;
background-size: 100% 100%;
&:hover{
    transform: none;
}
`


export default function Track({children, ...args}){
    return <TrackContainer {...args}>{children}</TrackContainer>
} 

Track.Icon = function TrackIcon({...args}){
    return <TrackIcon1 {...args} />
}

