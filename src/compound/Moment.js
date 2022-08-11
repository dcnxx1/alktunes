import React, {useState, useContext, useEffect} from 'react'
import ContextController from '../Context/ControllerContext';
function Moment({timeInt}) {
  
  var {timePlayed} = timeInt
  const [time ,setTime] = useState('')
  // from : https://stackoverflow.com/a/61335543
  function secondsToTime(timePlayed){
    const h = Math.floor(timePlayed / 3600).toString().padStart(2,'0'),
          m = Math.floor(timePlayed % 3600 / 60).toString().padStart(2,'0'),
          s = Math.floor(timePlayed % 60).toString().padStart(2,'0');
    
     return timePlayed >= 3600 === true ? h + ':' + m + ':' + s : m + ':' + s
    //return `${h}:${m}:${s}`;
  }

  
  useEffect(() => {
    setTime(secondsToTime(timePlayed))
  },[timePlayed])

  

  return <span className="moment-timer">{time}</span>
}

export default Moment