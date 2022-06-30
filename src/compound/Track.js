import React from 'react'

function Track({addClass}) {
  
  return (
    <li className={`track ${addClass}`}>
      <img  src='https://unsplash.it/50/50' />
    </li>
  )
}

export default Track