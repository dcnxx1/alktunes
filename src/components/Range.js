import React, {useContext, useMemo} from 'react'
import styled from 'styled-components'
import ContextController from '../Context/ControllerContext'
const Ranger = styled.input.attrs({type: 'range'})`
    width: 70%;
    height: fit-content;
    background: transparent; 
    border-color: transparent;
    color: transparent;
    max-width: 350px;
`

function Range() {
  const {at} = useContext(ContextController)

  return (
    <Ranger value="25"  />
  )
}

export default Range