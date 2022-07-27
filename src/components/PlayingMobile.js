import React, {useState, useRef} from 'react'
import Sheet from 'react-modal-sheet'
import {Icon, NextButton, BackButton, Pause, Range} from '../imports'

function Header (){
  return <div className='sheet-header'>
    <div className='sheet-header__cover'>
      <img src="https://unsplash.it/200/200" />
    </div>
    <div className='sheet-header__operator'>
      <div className='sheet-header-artist'>
        <span>Certified Loverboy</span>
        <span>Drake</span>
      </div>
      <div className='sheet-header__controller'>
        <Icon className="Icon"  path={BackButton} />
        <Icon className="Icon"  path={Pause} />
        <Icon className="Icon"  path={NextButton} />
      </div>
      <div className="sheet-header__range">
      <span>0:00</span>
        <Range />
        <span>2:15</span>
      </div>
    </div>
  </div>
}


function PlayingMobile({sheet}) {  
  const snapRef = useRef()
  const {openSheet} = sheet
  console.log('opensheet: ' + openSheet)
  return (
    <Sheet  className="sheet"
    ref={snapRef}
    onClose={e => console.log(e)} 
    snapPoints={[700, 0]} 
    initialSnap={1} 
    onCloseStart={e => console.log(e)}
    onSnap={snapIndex => console.log(snapIndex)} isOpen={true} 
    ><Sheet.Container>
        <Sheet.Header className="header-sheet" >
         {/* <Header /> */}
        </Sheet.Header>

    <Sheet.Content>
      Yoe
    </Sheet.Content>

      </Sheet.Container>
    </Sheet>
    
    )
}

export default PlayingMobile