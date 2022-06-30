import React from 'react'
import {Container} from './styled'

export default function PlayingComponent({children, ...args}) {
  return (
    <Container {...args}>
    {children}
    </Container>
  )
}

