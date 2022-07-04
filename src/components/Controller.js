import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {PlaylistWhite, Icon, LogoMedium, NextButton, BackButton, Range} from '../imports'
import statics from '../static/statics'
const ControllerComponents = styled(Icon)`
display: block;
background-size: 25px;
width: 25px;
height: 25px;
@media only screen and (max-width: ${statics.SCREEN_SIZE.DESKTOP_MEDIUM}){
  background-size: 20px;
}


@media only screen and (max-width: ${statics.SCREEN_SIZE.DESKTOP_MEDIUM}){
  background-size: 15px;
}

`


const urler = 'https://alktunes.s3.eu-central-1.amazonaws.com/destined_2_win/07.%20Headshot.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaDGV1LWNlbnRyYWwtMSJHMEUCICBUL3eRDbrFYobTMKc5Qoc%2BAHIkwVpDZaDan3Ahq2%2F9AiEA4r%2BaEVy8G13yM3A4jByyJwYgaPWutxsA9tUnvJG9LmUq%2FwIIeRAAGgw5NDM5Njk2NTQxODMiDMUGes4vINiqxG7UkSrcAnGAOLpRfoxV67v6DE8djMiuPOXuwcGBnyrPGgvuvBUvsUoVfhq%2BbRgM0qumjEchbCpIMa2cQnMHVQQr0Xxgcj25%2BqcLrFNgvDzmE6qXX%2BdPaNq%2Bn50fyDf7P9AVaCFJDU0Rw%2FrTwWrTRnBKqOOYi%2FhSl4Rjuf6XXep9Hd3xfwUEycmGvFAVJrk11xyksoA7ojtEfld%2FQgsiVsBjlW3Zq3YVfEgFV1ufZ41OpF51Sl3fpdH14QiiorWBIjE2ffRTMIokNQE464PqTYbLmMEcaPMsIaL5N%2FMR%2Bm8zaE8jq8vn8eSUcNdxQY6TooGUj0XDK%2B6%2BzG%2BHX5AT%2BuBuYlpwLuYecJD%2Fo%2BWiAm5w0Ak6jHuzca5VFYByoScVWtsPI9vW39LikLNPU9c16vNreuN2LjnFR04QrwfmgRMy%2B7azL69DtVNJFUxIFl9SdBbMRzia0p5sanQzt7Ayn67RBjD%2BgYeWBjqzAjS2bagociG9XQ0JS%2F0jllEN6TIdXXCVTvZLrCqScHSyzXimQsOttiKzwebFF4imn3BRacMzbiF6smhyyKrXj7RhoALiTdHjrvyZkzYfADElUeDtwEWVkD%2BRqK2tLZNj0YUAPWRjx1nxVKeIFdRuWJ08Q0D80PbmF6YmI70UVj8j98jz5HetXAJAD0MOs99SX4Bl%2Bx7r960C%2Fk4gJbUY9UBaTX4SpkJWuEFgjA2l3C8a%2B6fdpIDPV4pXE%2B%2FZBqF%2FZwg1ShYZlZ7YkMOla%2F4Bw3461kDbs9L8qZJOclJCtYsSJY5xgKiXSOUC8UOrjXtPgEJBN9qRHJLcKkPjfDJK8gA9ZkYaEbh1UeEMwSKmFNwbzzzS44QFth03eDR1Ilx8Yn5JOS7Z2w2%2Bn9Ts1DX3Hp2RLnc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220703T161942Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5XSHZ2WTWJS6KRMZ%2F20220703%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=770a6405d46f1a8d785e65931a9d7c6f2d0be8d6a81f3e8b356cf08b7b3acda4'

function Controller() {
  return (
    <div className='Controller'>
      <div className='controller-setting '>
        <div className='controller-info'>
          <i className="logo-alk"></i>
          <div className='controller-holder'>
            <span className='controller-song'>Certified Loverboy</span>
            <span className='controller-artist '>Drake</span>
          </div>
          </div>
          <div className='controller-action'>
            <ControllerComponents path={BackButton} />
            <Range />
            <ControllerComponents path={NextButton} />
          </div>
        
      </div>
      <ReactPlayer  width="20px" height="20px" playIcon={PlaylistWhite} playing={true} url={urler}></ReactPlayer>
    </div>
  )
}

export default Controller