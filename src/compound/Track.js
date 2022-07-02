import styled from "styled-components";
import React from 'react';
import Icon from "./Icon";
import statics from "../static/statics";
const Holder = styled.div`
display: ${({hide}) => hide == true ? "none" : "flex"};
flex-direction: ${({isColumn}) => isColumn == true ? "column" : "row"};
justify-content: center;
align-items: ${({isColumn}) => isColumn == true ? "left" : "center"};
padding-left: ${({isColumn}) => isColumn == true ? "1rem" : "0rem"};
flex: 1;
border: 2px solid white;
`

const TrackContainer = styled.div`
width: 100%;
height: fit-content;
display: flex;
`

const TrackCover = styled(Icon)`
width: 75px;
height: 75px;
&:hover{
    transform: none;
    transition: none;
}
`
const TrackText = styled.span`
color: ${({isGrey}) => isGrey == true ? "#ACADAF" : "white"};
`

export default function Track ({ hide = false , children, ...args}){
    return <TrackContainer {...args}>
        {children}
    </TrackContainer>
}

Track.Cover = function CoverTrack({ ...args }){
    return <TrackCover {...args} />
}

Track.Holder = function HolderTrack ({children, hide = false, isColumn, ...args}) {
    return <Holder {...args} isColumn={isColumn} hide={hide}>{children}</Holder>
}

Track.Text = function TextTrack({ isGrey, children, ...args}){
    return <TrackText {...args} isGrey={isGrey} >{children}</TrackText>
}