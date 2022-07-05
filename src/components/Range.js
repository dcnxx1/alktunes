import React from 'react'
import styled from 'styled-components'

const Ranger = styled.input.attrs({type: 'range'})`
    width: 70%;
    height: fit-content;
    background: transparent; 
    border-color: transparent;
    color: transparent;

`

function Range() {
  return (
    <Ranger  />
  )
}

export default Range